import requests

def obtener_clima(lat, lon, api_key):
    url = f"https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,daily,alerts&appid={api_key}&units=metric"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

def mostrar_clima(clima):
    if clima:
        temp_actual = clima['current']['temp']
        descripcion = clima['current']['weather'][0]['description']
        print(f"La temperatura actual es {temp_actual}°C con {descripcion}.")
    else:
        print("No se pudo obtener el clima.")

def recuperar_datos_clima():
   
    lat = float(input("Introduce la latitud: "))
    lon = float(input("Introduce la longitud: "))
    api_key = input("Introduce tu API key de OpenWeatherMap: ")
    
    clima = obtener_clima(lat, lon, api_key)
    mostrar_clima(clima)

if __name__ == "__main__":
    recuperar_datos_clima()