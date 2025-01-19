import requests
from bs4 import BeautifulSoup

# URL de la page à scraper
url = "https://examens.preptcfcanada.com/iump-account-page/"  # Remplace ceci par l'URL que tu souhaites scraper

# Faire une requête HTTP pour récupérer le contenu de la page
response = requests.get(url)

# Vérifier si la requête a réussi (status code 200)
if response.status_code == 200:
    # Extraire le contenu HTML
    html_content = response.text

    # Sauvegarder le contenu dans un fichier sur le disque
    with open("page_sauvegardee.html", "w", encoding="utf-8") as file:
        file.write(html_content)
    
    print("Page sauvegardée avec succès sous 'page_sauvegardee.html' !")
else:
    print(f"Erreur lors du téléchargement de la page: {response.status_code}")
