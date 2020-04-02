from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(default='Simple company with employees')
    city = models.CharField(max_length=20)
    address = models.TextField(default='Can not be found in the Google maps')
    pass

    def to_json(self):
        return {
            'company_id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default='Simple employee in the office')
    salary = models.FloatField(default=132.23)
    company = models.ForeignKey(Company,related_name='company_id',on_delete=models.CASCADE, default=1)

    def to_json(self):
        return {
            'vacancy_id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company_id
        }