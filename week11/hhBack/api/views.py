from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse
import json
from api.models import Company, Vacancy
from django.http import Http404
# Create your views here.

def hello(request):
    return HttpResponse('<h1>Hello, my name is Temirlan Tulebaev)P</h1>')

def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'company does not exist'})
    return JsonResponse(company.to_json())

def all_vacancies_from_company(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'ERROR:' 'such vacancy does not exist'})
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
# def product_list(request):
#     #select * from api_product
#     products = Product.objects.all()
#     products_json = [product.to_json() for product in products]
#     return JsonResponse(products_json, safe=False)
#
# def product_detail(request, product_id):
#     #select * from api_product where id= product_id
#     try:
#         product = Product.objects.get(id=product_id)
#     except Product.DoesNotExist as e:
#         return JsonResponse({'error': 'product does not exist'})
#
#     return JsonResponse(product.to_json())
#
# def category_list(reques):
#     #select * from api_categories
#     categories = Category.objects.all()
#     categories_json = [category.to_json() for category in categories]
#     return JsonResponse(categories_json, safe=False)
#
# def category_detail(request, category_id):
#     #select * from api_categories where id= category_id
#     try:
#         category = Category.objects.get(id=category_id)
#     except Category.DoesNotExist as e:
#         return JsonResponse({'error': 'category does not exist'})
#
#     return JsonResponse(category.to_json())
#
# def all_products_from_category(request, category_id):
#     #SELECT * FROM api_product WHERE id = category_id
#         products = Product.objects.filter(category_id=category_id)
#
#         products_json = [product.to_json() for product in products]
#         return JsonResponse(products_json, safe=False)
