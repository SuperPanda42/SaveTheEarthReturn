# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import redirect
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
    return home(request)

def connexion(request):
    return "connexion"

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