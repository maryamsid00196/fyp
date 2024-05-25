from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('deepfakegenerator/', include('DeepFakeGenerator.urls')),
    path('', include('DeepFakeGenerator.urls')),  # Assuming you have a main app
]
