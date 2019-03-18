from .views import ArticlesViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticlesViewSet, basename='articles')
urlpatterns = router.urls
