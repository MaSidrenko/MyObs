# Работа с директориями и файлами

| Описание                  | Команда             | Ключи / Пояснение      | Пример                       |
| ------------------------- | ------------------- | ---------------------- | ---------------------------- |
| Показать текущий каталог  | `pwd`               | —                      | `pwd`                        |
| Перейти в каталог         | `cd <path>`         | `cd ..`, `cd ~`        | `cd /etc`                    |
| Список файлов             | `ls`                | `-l`, `-a`, `-h`, `-R` | `ls -la`                     |
| Создать каталог           | `mkdir <dir>`       | `-p` — вложенно        | `mkdir projects`             |
| Удалить каталог (пустой)  | `rmdir <dir>`       | —                      | `rmdir test_dir`             |
| Удалить файл/каталог      | `rm <item>`         | `-r`, `-f`, `-i`       | `rm -rf build/`              |
| Копировать файл           | `cp <src> <dst>`    | `-r`, `-i`, `-v`       | `cp config.json backup.json` |
| Переместить/переименовать | `mv <src> <dst>`    | `-i`, `-v`             | `mv old.txt new.txt`         |
| Создать файл              | `touch <file>`      | —                      | `touch note.txt`             |
| Записать текст в файл     | `echo "txt" > file` | перезаписывает         | `echo "Hello" > hi.txt`      |
# Просмотр файлов
| Описание              | Команда       | Ключи / Пояснение  | Пример                 |
| --------------------- | ------------- | ------------------ | ---------------------- |
| Показать файл         | `cat <file>`  | —                  | `cat README.md`        |
| Постраничный просмотр | `less <file>` | удобно для больших | `less /var/log/syslog` |
| Первые строки         | `head <file>` | `-n <num>`         | `head -n 5 log.txt`    |
| Последние строки      | `tail <file>` | `-n`, `-f`         | `tail -f access.log`   |
| Вывести текст         | `echo <text>` | —                  | `echo "Server OK"`     |
# Поиск
|Описание|Команда|Ключи / Пояснение|Пример|
|---|---|---|---|
|Найти файл по имени|`find <path> -name "<pattern>"`|`-type f/d`|`find . -name "*.txt"`|
|Поиск текста в файлах|`grep "<text>" <file>`|`-r`, `-i`, `-n`, `-E`|`grep -r "ERROR" src/`|
|История команд|`history`|`Ctrl+R` поиск|`history|
# Система
|Описание|Команда|Ключи / Пояснение|Пример|
|---|---|---|---|
|Текущий пользователь|`whoami`|—|`whoami`|
|Имя хоста|`hostname`|—|`hostname`|
|Дата|`date`|формат через `+`|`date +"%H:%M:%S"`|
|Процессы|`ps`|`ps aux` — все|`ps aux|
|Мониторинг|`top`|—|`top`|
|Использование диска|`df -h`|readable|`df -h`|
|Размер каталога|`du -h <dir>`|`-s` — итог|`du -h /var/log`|
|Очистить терминал|`clear`|—|`clear`|
# Сеть
|Описание|Команда|Ключи / Пояснение|Пример|
|---|---|---|---|
|Проверить доступность|`ping <host>`|`-c <n>`|`ping -c 4 google.com`|
|Инфо об интерфейсах|`ip a`|современно|`ip a`|
|Скачать файл|`wget <url>`|—|`wget https://example.com/app.deb`|
|Скачать curl'ом|`curl -O <url>`|`-L` follow redirect|`curl -O https://example.com/file.zip`|
|Проверить порты|`netstat -tulnp`|—|`netstat -tulnp|
|Проверить маршрут|`ip route`|—|`ip route`|
# Права доступа
|Описание|Команда|Ключи / Пояснение|Пример|
|---|---|---|---|
|Показать права|`ls -l`|—|`ls -l /usr/bin`|
|Изменить права|`chmod <mode> <file>`|числовые/символы|`chmod 755 script.sh`|
|Добавить выполнение|`chmod +x <file>`|—|`chmod +x run.sh`|
|Изменить владельца|`chown <u>:<g> <file>`|—|`chown root:root config`|
# Архивация
|Описание|Команда|Команда|Пример|
|---|---|---|---|
|Создать tar|`tar -cvf arch.tar <files>`|`-c` create / `-v` verbose / `-f` file|`tar -cvf logs.tar logs/`|
|Распаковать tar|`tar -xvf arch.tar`|`-x` extract|`tar -xvf backup.tar`|
|Создать tar.gz|`tar -czvf arch.tar.gz <dir>`|`-z` gzip|`tar -czvf site.tar.gz www/`|
|Распаковать tar.gz|`tar -xzvf arch.tar.gz`|—|`tar -xzvf project.tar.gz`|
|Сжать файл|`gzip <file>`|—|`gzip data.txt`|
|Распаковать gzip|`gunzip <file.gz>`|—|`gunzip data.txt.gz`|
# Утилиты
|Описание|Команда|Ключи / Пояснение|Пример|
|---|---|---|---|
|Очистить файл|`> file`|быстро обнулить|`> log.txt`|
|Дерево каталогов|`tree`|`-L <n>`|`tree -L 2`|
|Сравнить файлы|`diff f1 f2`|`-u` unified diff|`diff old.conf new.conf`|
|Символическая ссылка|`ln -s target link`|—|`ln -s /var/www html`|
|Информация о файле|`stat <file>`|—|`stat script.sh`|
|Случайные байты|`head -c <n> /dev/urandom`|—|`head -c 32 /dev/urandom > key.bin`|