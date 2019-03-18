from rest_framework import serializers
from articles.models import Articles


class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('id', 'title', 'content')
