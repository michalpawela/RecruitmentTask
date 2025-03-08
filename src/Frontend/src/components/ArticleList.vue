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
import type { Article } from "../models/Article";
import { fetchArticles, addArticle, updateArticle, deleteArticle } from '../api/articles.js';

export default defineComponent({
  name: 'ArticleList',
  setup() {
    const $q = useQuasar();

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
    const saveArticleHandler = async () => {
      if (!editingArticle.value) return;

      // Check if title and content exist
      if (!editingArticle.value.title || !editingArticle.value.content) {
        $q.notify({ message: 'Title and content are required' , color: 'negative' });
        return;
      }

      try {
        if (editingArticle.value.article_id) {
          await updateArticle(editingArticle.value);
          articles.value = articles.value.map((a) => (a.article_id === editingArticle.value?.article_id ? editingArticle.value : a));
          $q.notify({ message: 'Article updated successfully' ,color: 'positive' });
        } else {
          const newArticle = await addArticle({ title: editingArticle.value.title, content: editingArticle.value.content });
          articles.value.push(newArticle);
          $q.notify({ message: 'Article added successfully' ,color: 'positive' });
        }
      } catch {
        $q.notify({message: 'Failed to save article' ,color: 'negative' });
      } finally {
        dialog.value = false; // Ensure the dialog closes regardless of success or failure
      }
    };

    // Delete an article
    const deleteArticleHandler = async (id: number) => {
      try {
        await deleteArticle(id);
        articles.value = articles.value.filter((a) => a.article_id !== id);
        $q.notify({ message: 'Article deleted' ,color: 'positive' });
      } catch {
        $q.notify({ message: 'Failed to delete article' ,color: 'negative' });
      }
    };

    // Fetch articles
    const fetchArticlesHandler = async () => {
      try {
        articles.value = await fetchArticles();
      } catch {
        $q.notify({ message: 'Failed to fetch articles' ,color: 'negative' });
      }
    };

    onMounted(fetchArticlesHandler);

    return {
      articles,
      dialog,
      editingArticle,
      editableTitle,
      editableContent,
      openDialog,
      saveArticle: saveArticleHandler,
      deleteArticle: deleteArticleHandler,
      columns
    };
  },
});
</script>
