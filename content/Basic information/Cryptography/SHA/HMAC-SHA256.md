HMAC-SHA256(Sash-based Message Authentication Code) - это метод создания криптографической подписи для данных с помощью ключа и хеш-функции ([[Hash-Functions]]) SHA-256/ 
HMAC используется для проверки целостности и аутентичности данных
# Как работает HMAC
1. Берём входные данные (сообщение);
2. Генерируем секретный ключ (Частный случай [[Secure Key]](Отличия: Секретный ключ всегда скрыт, Секретный ключ используется для Аутентификации и шифрования, длинна 128-512 бит));
3. Применяем [[SHA-256]] дважды:
	1. Один раз к (ключ + сообщение);
	2. Второй раз (Ключ + результат предыдущей операции);
4. Получаем итоговый HMAC;
Даже если кто-то изменит сообщение, HMAC тоже изменится.
Без ключа невозможно подделать правильный HMAC.
# Пример HMAC в CSHARP

```
using System;
using System.Text;
using System.Security.Cryptography;

public class HMACExample
{
	public static string ComputeHMACSHA256(string message, byte[] key)
	{
		using(var hmac = new HMACSHA256(key))
		{
			byte[] messageBytes = Encoding.UTF8.GetBytes(message);
			byte[] hashBytes = hmac.ComputeHash(messageBytes);
			return ButConverter.ToString(hashBytes).Replace("-","").ToLower();
		}
	}

	public static void Main()
	{
		string message = "Hello wordl!";
		byte[] key = Encoding.UTF8.HetBytes("supersecretkey"); 
		//(НЕБЕЗОПАСНО!!!!)
		//Ключ лучше генерировать!! 
		
		string hmac = ComputeHMACSHA256(message, key);
		Console.WriteLine($"HMAC-SHA256: {hmac}");
	}
}
```
Как этот код работает:
	1. Создаём HMAC-SHA256 объект с секретным ключом;
	2. Хешируем([[Hash]]) сообщение с этим ключом;
	3. Возвращаем итоговый HMAC в виде строки
Возможный итог вывода:
```
HMAC-SHA256: 5d41402abc4b2a76b9719d911017c592...
```
### Где используется HMAC?
1. Аутентификация сообщений (API, JWT-токены, подписи веб-запросов);
2. Проверка целостности данных(чтобы убедится, что данные не изменились);
3. Защита паролей и одноразовых кодов(TOTP, HOTP);
4. Протоколы безопасности(TLS, IPSec, SSH);