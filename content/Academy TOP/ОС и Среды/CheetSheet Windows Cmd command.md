# Основные команды CMD / PowerShell

| Описание                        | Команда                | Ключи / Пояснения                                | Примеры                                  |
| ------------------------------- | ---------------------- | ------------------------------------------------ | ---------------------------------------- |
| Показать текущий каталог        | `cd`                   | Без аргументов показывает текущий путь           | `cd`                                     |
| Перейти в каталог               | `cd <path>`            | Путь можно указывать в кавычках                  | `cd "C:\Program Files"`                  |
| Показать содержимое каталога    | `dir`                  | `/w` — широкое отображение, `/a` — скрытые файлы | `dir /a`                                 |
| Очистить экран                  | `cls`                  | —                                                | `cls`                                    |
| Создать папку                   | `mkdir <name>`         | Или `md`                                         | `mkdir Projects`                         |
| Удалить папку                   | `rmdir <name>`         | `/s` — удалить рекурсивно, `/q` — тихий режим    | `rmdir /s /q temp`                       |
| Копировать файл                 | `copy <src> <dest>`    | Работает только с файлами                        | `copy file.txt D:\backup\`               |
| Переместить файл/папку          | `move <src> <dest>`    | —                                                | `move logs D:\archive\`                  |
| Удалить файл                    | `del <file>`           | `/f` — принудительно, `/q` — тихо                | `del /f secret.txt`                      |
| Показать IP настройки           | `ipconfig`             | `/all` — подробный вывод                         | `ipconfig /all`                          |
| Показать активные подключения   | `netstat`              | `-an` — все + номера портов                      | `netstat -an`                            |
| Ping хоста                      | `ping <host>`          | `-t` — бесконечно, `-n <num>` — кол-во пакетов   | `ping google.com -n 5`                   |
| Завершить процесс               | `taskkill`             | `/im` — по имени, `/pid` — по PID                | `taskkill /im notepad.exe /f`            |
| Просмотреть процессы            | `tasklist`             | `/v` — подробный список                          | `tasklist`                               |
| Проверить доступность порта     | `telnet <host> <port>` | Нужно включить компонент Telnet                  | `telnet localhost 8080`                  |
| Работа с сетевыми интерфейсами  | `netsh`                | Много подсистем                                  | `netsh wlan show profile`                |
| Показать переменные окружения   | `set`                  | `set <name>` — поиск                             | `set PATH`                               |
| Установить переменную окружения | `setx <name> <value>`  | Работает **постоянно**, но не в текущей сессии   | `setx API_KEY 123456`                    |
| Показать дерево каталогов       | `tree`                 | `/f` — показать файлы                            | `tree /f`                                |
| Создать пустой файл             | `type nul > file.txt`  | Аналог `touch`                                   | `type nul > notes.txt`                   |
| Показать содержимое файла       | `type <file>`          | —                                                | `type README.txt`                        |
| Скачать файл                    | `curl <url> -o <file>` | Работает в Win10+                                | `curl https://example.com -o index.html` |
# PowerShell Команды (удобные)
| Описание              | Команда                            | Ключи / Пояснения           | Примеры                                                    |
| --------------------- | ---------------------------------- | --------------------------- | ---------------------------------------------------------- |
| Список файлов         | `Get-ChildItem` (алиас `ls`)       | Можно фильтровать `-Filter` | `ls -Filter *.txt`                                         |
| Показать путь         | `Get-Location` (алиас `pwd`)       | —                           | `pwd`                                                      |
| Перейти в каталог     | `Set-Location <path>` (алиас `cd`) | —                           | `cd C:\Windows`                                            |
| Создать файл          | `New-Item <name>`                  | `-ItemType File`            | `New-Item test.txt -ItemType File`                         |
| Создать папку         | `New-Item <name>`                  | `-ItemType Directory`       | `New-Item Logs -ItemType Directory`                        |
| Читать файл           | `Get-Content <file>` (алиас `cat`) | —                           | `cat config.json`                                          |
| Писать в файл         | `Set-Content`                      | Перезаписывает              | `Set-Content file.txt "hello"`                             |
| Добавить в файл       | `Add-Content`                      | Добавляет в конец           | `Add-Content file.txt "line"`                              |
| Копировать            | `Copy-Item <src> <dst>`            | —                           | `Copy-Item a.txt b.txt`                                    |
| Переместить           | `Move-Item`                        | —                           | `Move-Item a.txt folder\`                                  |
| Удалить               | `Remove-Item` (алиас `rm`)         | `-Recurse` — рекурсивно     | `rm -Recurse temp\`                                        |
| Показать процессы     | `Get-Process`                      | —                           | `Get-Process chrome`                                       |
| Завершить процесс     | `Stop-Process`                     | `-Name` или `-Id`           | `Stop-Process -Name notepad`                               |
| Скачать файл          | `Invoke-WebRequest`                | `-OutFile` — куда сохранить | `Invoke-WebRequest https://example.com -OutFile page.html` |
| Выполнить команду CMD | `cmd /c <command>`                 | —                           | `cmd /c dir`                                               |