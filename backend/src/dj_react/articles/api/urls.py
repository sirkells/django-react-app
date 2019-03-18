from django.urls import path, include
from .views import ArticleDetailView, ArticleListView
urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),

]
