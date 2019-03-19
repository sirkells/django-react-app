# from .views import ArticlesViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', ArticlesViewSet, basename='articles')
# urlpatterns = router.urls


from django.urls import path, include
from .views import (
    ArticleDetailView,
    ArticleListView,
    ArticleCreateView,
    ArticleUpdateView,
    ArticleDeleteView
)
urlpatterns = [
    path('', ArticleListView.as_view()),
    path('create/', ArticleCreateView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
    path('<pk>/update/', ArticleUpdateView.as_view()),
    path('<pk>/delete/', ArticleDeleteView.as_view()),

]
