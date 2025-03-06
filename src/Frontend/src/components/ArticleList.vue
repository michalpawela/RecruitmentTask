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



    <q-list bordered>
      <q-item v-for="article in articles" :key="article.id">
        <q-item-section>
          <div>{{ article.title }}</div>
          <div>{{ article.releaseDate }}</div>
        </q-item-section>
        <q-item-section side>
          <q-btn flat icon="edit" @click="openDialog(article)" />
          <q-btn flat icon="delete" @click="deleteArticle(article.id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useQuasar } from 'quasar';

interface Article {
  id: number;
  title: string;
  content: string;
  releaseDate: string;
}



export default defineComponent({
  name: 'ArticleList',
  setup() {
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
    : { id: 0, title: '', content: '', releaseDate: (new Date().toISOString().split('T')[0] || '') };
  dialog.value = true;
};

    // Save article (create/update)
    const saveArticle = () => {
      if (!editingArticle.value) return;

      if (editingArticle.value.id) {
        articles.value = articles.value.map((a) => (a.id === editingArticle.value?.id ? editingArticle.value : a));
        $q.notify({ type: 'positive', message: 'Article updated successfully' });
      } else {
        editingArticle.value.id = new Date().getTime();
        articles.value.push(editingArticle.value);
        $q.notify({ type: 'positive', message: 'Article added successfully' });
      }
      dialog.value = false;
    };

    // Delete an article
    const deleteArticle = (id: number) => {
      articles.value = articles.value.filter((a) => a.id !== id);
      $q.notify({ type: 'negative', message: 'Article deleted' });
    };

    // Fetch articles (mocked)
    const fetchArticles = () => {
      articles.value = [
        { id: 1, title: 'Article 1', content: 'Content 1', releaseDate: '2024-01-15' },
        { id: 2, title: 'Article 2', content: 'Content 2', releaseDate: '2024-02-20' },
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
      deleteArticle
    };
  },
});
</script>
