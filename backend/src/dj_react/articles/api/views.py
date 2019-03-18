from rest_framework.generics import ListAPIView, RetrieveAPIView

from articles.models import Articles
from .serializer import ArticleSerializers


class ArticleListView(ListAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers


class ArticleDetailView(RetrieveAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializers
