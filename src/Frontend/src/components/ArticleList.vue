<template>
  <div>
    <q-btn @click="openDialog(null)" label="Add Article" color="primary" />
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ editingArticle ? 'Edit Article' : 'Add Article' }}</div>

          <!-- Bind to computed properties instead of directly to `editingArticle` -->
          <q-input v-model="editableTitle" label="Title" />
          <q-input v-model="editableContent" label="Content" type="textarea" />
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Cancel" color="secondary" @click="dialog = false" />
          <q-btn flat label="Save" color="primary" @click="saveArticle" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-table
      title="Treats"
      :rows="articles"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat icon="edit" @click="openDialog(props.row)" />
          <q-btn flat icon="delete" @click="deleteArticle(props.row.article_id)" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';

interface Article {
  article_id: number;
  title: string;
  content: string;
}

export default defineComponent({
  name: 'ArticleList',
  setup() {
    const columns = [
      {
        name: 'name',
        required: true,
        label: 'id',
        align: 'left' as const,
        field: (row: { article_id: number; }) => row.article_id,
        sortable: true
      },
      { name: 'title', label: 'Title', field: 'title', sortable: true },
      { name: 'content', label: 'Content', field: 'content', sortable: true },
      { name: 'actions', label: 'Actions', field: 'actions', sortable: false }
    ];
    const $q = useQuasar();

    // Reactive state
    const articles = ref<Article[]>([]);
    const dialog = ref(false);
    const editingArticle = ref<Article | null>(null);

    // Computed properties for safe v-model binding
    const editableTitle = computed({
      get: () => editingArticle.value?.title || '',
      set: (newValue) => {
        if (editingArticle.value) editingArticle.value.title = newValue;
      },
    });

    const editableContent = computed({
      get: () => editingArticle.value?.content || '',
      set: (newValue) => {
        if (editingArticle.value) editingArticle.value.content = newValue;
      },
    });

    // Open dialog for adding/editing
    const openDialog = (article: Article | null) => {
      editingArticle.value = article
        ? { ...article }
        : { article_id: 0, title: '', content: ''};
      dialog.value = true;
    };

    // Save article (create/update)
    const saveArticle = () => {
      if (!editingArticle.value) return;

      if (editingArticle.value.article_id) {
        articles.value = articles.value.map((a) => (a.article_id === editingArticle.value?.article_id ? editingArticle.value : a));
        $q.notify({ type: 'positive', message: 'Article updated successfully' });
      } else {
        editingArticle.value.article_id = new Date().getTime();
        articles.value.push(editingArticle.value);
        $q.notify({ type: 'positive', message: 'Article added successfully' });
      }
      dialog.value = false;
    };

    // Delete an article
    const deleteArticle = (id: number) => {
      articles.value = articles.value.filter((a) => a.article_id !== id);
      $q.notify({ type: 'negative', message: 'Article deleted' });
    };

    // Fetch articles (mocked)
    const fetchArticles = () => {
      articles.value = [
        { article_id: 1, title: 'Article 1', content: 'Content 1'},
        { article_id: 2, title: 'Article 2', content: 'Content 2'},
      ];
    };

    onMounted(fetchArticles);

    // ✅ Make sure to return `editingArticle` so it's available in the template
    return {
      articles,
      dialog,
      editingArticle,
      editableTitle,
      editableContent,
      openDialog,
      saveArticle,
      deleteArticle,
      columns
    };
  },
});
</script>
