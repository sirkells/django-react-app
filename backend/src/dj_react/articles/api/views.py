from rest_framework import viewsets

from articles.models import Articles
from .serializer import ArticleSerializers


class ArticlesViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticleSerializers
    queryset = Articles.objects.all()
