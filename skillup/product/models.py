from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.TextChoices):
    DEVELOPPEMENT = 'Développement Personnel et Soft Skills'
    BUSINESS = 'Business et Entrepreneuriat'
    COMPETENCES = 'Compétences Digitales'
    INFORMATIQUE = 'Informatique et Programmation'
    LANGUES = 'Langues et Communication'
    SANTE = 'Santé et Bien-être'
    ART = 'Art et Créativité'
    SCIENCES = 'Sciences et Éducation'

class Product(models.Model):
    name = models.CharField(max_length=200, default="", blank=False)
    description = models.TextField(max_length=1000, default="", blank=False)
    price = models.DecimalField(max_digits=7, decimal_places=2, default=0)
    Author = models.CharField(max_length=200, default="", blank=False)
    category = models.CharField(max_length=38, choices=Category.choices)
    ratings = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    stock = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    
    def __str__(self):
        return self.name

