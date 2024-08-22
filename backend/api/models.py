from django.db import models

# Create your models here.
class Game(models.Model):
    title = models.CharField(max_length=100)
    developer = models.CharField(max_length=100)
    release_date = models.CharField(max_length=13)
    genre = models.CharField(max_length=100)
    review = models.CharField(max_length=1000)

    def __str__(self):
        return self.title
    
    class Meta:
        app_label='api'
    