from django.contrib import admin
from django.urls import path
from api.views import hello, company_list,company_detail, all_vacancies_from_company,\
                        vacancy_list, vacancy_detail,top_ten_vacancies

urlpatterns = [
    path('hello/', hello),
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies', all_vacancies_from_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies)
]