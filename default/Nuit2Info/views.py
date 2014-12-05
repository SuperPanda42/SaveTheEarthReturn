# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import redirect
from django.http import HttpResponse
from datetime import date, datetime
import time
import urllib2, urllib

from Nuit2Info.models import *

# Create your views here.

###################################################################################################
###################################################################################################
                                 # ANY USER METHODS
###################################################################################################
###################################################################################################

def home(request):
    return render(request, 'base.html', locals())

def random(request):
    url = 'http://54.154.27.229:9876/opendata/question'
    req = urllib2.Request(url)
    handler = urllib2.urlopen(req)
    
    return HttpResponse(handler.read())