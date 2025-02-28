<template>
  <div>
    <q-btn @click="dialog = true" label="Add Article" color="primary" />
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <!-- Ensure editingArticle is not null before using its properties -->
          <div class="text-h6">{{ editingArticle ? 'Edit Article' : 'Add Article' }}</div>

          <!-- Make sure we are not trying to bind to null -->
          <q-input v-model="editingArticle?.title" label="Title" />
          <q-input v-model="editingArticle?.content" label="Content" type="textarea" />
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Cancel" color="secondary" @click="dialog = false" />
          <!-- Only call saveArticle if editingArticle is not null -->
          <q-btn
            flat
            label="Save"
            color="primary"
            @click="editingArticle && saveArticle(editingArticle)"
          />
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
          <q-btn
            flat
            icon="edit"
            @click="
              editingArticle = article
              dialog = true
            "
          />
          <q-btn flat icon="delete" @click="deleteArticle(article.id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

interface Article {
  id: number
  title: string
  content: string
  releaseDate: string
}

export default defineComponent({
  name: 'ArticleList',
  setup() {
    const $q = useQuasar()

    const articles = ref<Article[]>([])
    const dialog = ref(false) // Define dialog as a reactive boolean
    const editingArticle = ref<Article | null>(null) // Define editingArticle as a reactive reference

    const fetchArticles = () => {
      // Mocked BE response
      articles.value = [
        { id: 1, title: 'Article 1', content: 'Content 1', releaseDate: '2024-01-15' },
        { id: 2, title: 'Article 2', content: 'Content 2', releaseDate: '2024-02-20' },
      ]
    }

    const saveArticle = (article: Article) => {
      if (article.id) {
        articles.value = articles.value.map((a) => (a.id === article.id ? article : a))
        $q.notify({ type: 'positive', message: 'Article updated successfully' })
      } else {
        article.id = new Date().getTime()
        articles.value.push(article)
        $q.notify({ type: 'positive', message: 'Article added successfully' })
      }
      dialog.value = false
    }

    const deleteArticle = (id: number) => {
      articles.value = articles.value.filter((a) => a.id !== id)
      $q.notify({ type: 'negative', message: 'Article deleted' })
    }

    onMounted(fetchArticles)

    return { articles, dialog, editingArticle, saveArticle, deleteArticle }
  },
})
</script>
