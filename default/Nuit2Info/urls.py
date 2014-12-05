from django.conf.urls import patterns, url

urlpatterns = patterns('Nuit2Info.views',
                       url(r'^$', 'home'),
                       url(r'^random/$', 'random'),
)
