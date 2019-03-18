from django.db import models

# Create your models here.


class Articles(models.Model):
    """Model definition for Articles."""

    # TODO: Define fields here
    title = models.CharField(max_length=120)
    content = models.TextField()

    class Meta:
        """Meta definition for Articles."""
        verbose_name = 'Articles'
        verbose_name_plural = 'Articles'

    def __str__(self):
        """Unicode representation of Articles."""
        return self.title
