# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import redirect
from django.http import HttpResponse
from datetime import date, datetime
import time

from Nuit2Info.models import *

# Create your views here.

###################################################################################################
###################################################################################################
                                 # ANY USER METHODS
###################################################################################################
###################################################################################################

def home(request):
    return render(request, 'base.html', locals())

def deconnexion(request):
    logout(request)
    return HttpResponse("OK")

def connexion(request):
    if request.method == "POST":
        mail = request.POST.cleaned_data["email"]
        password = request.POST.cleaned_data["password"]
        user = authenticate(username=mail, password=password)
        if user:
            login(request, user)
            return HttpResponse("OK")
    return HttpResponse("KO")

def inscription(request):
    return "inscription"

###################################################################################################
###################################################################################################
                                # LOGGED USERS ONLY METHODS
###################################################################################################
###################################################################################################

@login_required
def compte(request):
    return "account"