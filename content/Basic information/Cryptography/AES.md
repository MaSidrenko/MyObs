AES(Advances Encryption Standard) - Симметричный алгоритм блочного шифрования, который используется для защиты данных. Он пришёл на смену устаревшему DES и стал стандартом шифрования.
### Где используется AES
1. Шифрование файлов, дисков, баз данных;
2. VPN SSL/TLS (HTTPS);
3. Защита паролей и токенов;
4. Блокчейн и криптовалюты;
# Основные характеристики AES
![![Basic information/ Cryptography/#*Table3]]
# Как работает AES
1. Шифрование 
	1. AES разбивает данные на блоки по 128 бит и шифрует их с помощью нескольких раундов преобразований;
	2. Основные этапы шифрования AES:
		1.  Добавление ключа(AddRoundKey) - XOR входных данных с ключом;
		2. Подстановка (SubBytes) - заменяет байты по S-блокам(S-Box);
		3. Перемешивание строк(ShiftRows) - сдвиг строк в блоке;
		4. Перемешивание столбцов (MinColumns) - усложняет зависимость битов;
		5. Добавление ключа (AddRoundKey) - снова смешиваем с ключом;
	3.  Количество раундов зависит от длины ключа:
		1. AES-128 -> 10 раундов;
		2. AES-192 -> 12 раундов;
		3. AES-256 -> 14 раундов;
2. Расшифрование
	1. Процесс расшифрование идёт в обратном порядке используя тот же ключ;
# Режимы работы AES
 1. ECB(Electrionic Codebook) - НЕ РЕКОМЕНДУЕТСЯ (УСТАРЕЛО!!!) - каждый блок шифруется одинаково, если данные повторяются. Проблема: одинаковые входные блоки, дают одинаковые входные блоки -> легко взломать;
 2. CBC(Cipher Block Chaining)
	 1. Использует IV(Initialization Vector), чтобы исключить повторяющиеся блоки;
	 2. Каждый блок завис от предыдущего;
	 3. Важно: IV - должен быть случайным и уникальны;
	 4. Уязвим к атакам, если IV предсказуемый;

```
Block1 -> Encrypt -> Block2 - Encrypt -> Block3 ...
```
1. GCM(Galois Counter Mode)
	1. Быстрый и безопасный режим с аутентификацией;
	2. Не требует отдельного MAC(HMAC ([[HMAC-SHA256]]));
	3. Используется в TLS 1.3, VPN, HTTPS, SSH;
	4. При правильном использовании не имеет уязвимостей CBC;
### Пример AES-256 в Csharp
```
using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

class AESExample
{
	public static byte[] EncryptAES(string text, byte[] key, byte[] iv)
	{
		using (Aes aes = Aes.Create())
		{
			aes.Key = Key;
			aes.IV = iv;
			aes.Mode = CipherMode.CBC;
			aes.Padding = PaddingMode.PKCS7;
			using (MemoryStream ms = new MemoryStream())
			using (ICryptoTransform encryptor = aes.CreateEncryptor())
			using (CryptoStream cs = new Cryptostream(ms, encryptor, CryptoStreamMode.Write))
			{
				byte[] date = Encoding.UTF8.GetBytes(text);
				cs.Wrire(data, 0, data.Length);
				cs.FlushFinalBlock();
				retrun ms.ToArray();
			}
		}
	}

	public static string DecryptAES(byte[] encryptedData, byte[] key, byte[] iv)
	{
		using(Aes aes = Aes.Create())
		{
			aes.Key = key;
			aes.IV = iv;
			aes.Padding = PaddingMode.PKCS7;

			using (Memorystream ms = new MemoryStream(encryptedData))
			using (IcryptoTransform decryptor - aes.CreateDecryptor)
			using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read))
			{
				byte[] decryptedData = new byte[encryptedData.Length];
				int bytes = cs.Read(decryptedData, 0, decryptedData.Length);
				return Encdoing.UTF8.GetString(decryptedData,0, bytesRead);
			}
		}
	}

	static void Main()
	{
		string originalText = "Hello, AES!";
		byte[] key = new byte[32]; //ключ на 256 бит
		byte[] iv = new byte[16]; //Вектор на 128 бит

		using (var rng = new RNGCryptoServiceProvider())
		{
			rng.Getbytes(key);
			rng.Getbytes(iv);
		}
		
		byte[] encryptedData = EncryptAES(originalText, key, iv);
		string decryptedText = DecryptAES(encryptedData, key, iv);

		Console.WriteLine($"Исходный текст: {originalText}");
		Console.WriteLine($"Зашифрованные данные (Base64): {Convert.ToBase64String(encryptedData)}");
		Console.WriteLine($"Расшифрованный текст: {decryptedText}");
	}
}
```