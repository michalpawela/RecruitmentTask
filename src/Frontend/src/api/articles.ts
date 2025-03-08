import axios from "axios";
import { API_BASE_URL, isMock } from "../../tsconfig.json";
import type { Article } from "../models/Article";

export const fetchArticles = async (): Promise<Article[]> => {
    if (isMock) {
        // Mock data
        return [
            { article_id: 1, title: "Mock Article 1", content: "Content of mock article 1" },
            { article_id: 2, title: "Mock Article 2", content: "Content of mock article 2" },
        ];
    }
    try {
        const response = await axios.get<Article[]>(`${API_BASE_URL}articles`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch articles", error);
        throw error;
    }
};

export const addArticle = async (article: Omit<Article, "article_id">): Promise<Article> => {
    if (isMock) {
        // Mock add
        const newArticle = { ...article, article_id: Math.floor(Math.random() * 1000) };
        return newArticle;
    }
    try {
        const response = await axios.post<Article>(`${API_BASE_URL}articles`, article);
        return response.data;
    } catch (error) {
        console.error("Failed to add article", error);
        throw error;
    }
};

export const updateArticle = async (article: Article): Promise<void> => {
    if (isMock) {
        // Mock update
        return;
    }
    try {
        await axios.put(`${API_BASE_URL}articles/${article.article_id}`, article);
    } catch (error) {
        console.error("Failed to update article", error);
        throw error;
    }
};

export const deleteArticle = async (article_id: number): Promise<void> => {
    if (isMock) {
        // Mock delete
        return;
    }
    try {
        await axios.delete(`${API_BASE_URL}articles/${article_id}`);
    } catch (error) {
        console.error("Failed to delete article", error);
        throw error;
    }
};
