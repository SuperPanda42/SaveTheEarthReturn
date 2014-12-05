from django.conf.urls import patterns, url

urlpatterns = patterns('Nuit2Info.views',
                       url(r'^$', 'home'),
                       url(r'^login/$', 'connexion'),
                       url(r'^inscription/$', 'inscription'),
                       url(r'^logout/$', 'deconnexion'),
                       url(r'^monCompte/$', 'compte'),
)
