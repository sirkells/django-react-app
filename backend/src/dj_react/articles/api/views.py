from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from articles.models import Articles
from .serializer import ArticleSerializers


class ArticleListView(ListAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers


class ArticleDetailView(RetrieveAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers


class ArticleCreateView(CreateAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers


class ArticleUpdateView(UpdateAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers


class ArticleDeleteView(DestroyAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers
