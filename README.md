# movies-explorer-api
*Бэкенд дипломной работы в Яндекс.Практикуме на курсе "Веб-разработчик".*

### Задание
**Что нужно разработать?**

Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

**Как он должен работать?**

Пользователь вводит в строку поиска ключевые слова и нажимает кнопку «Искать». После этого сайт должен выполнить следующие действия:
* отправить запрос к нашему сервису с данными о фильмах, получить данные и сохранить;
* согласно выбранному жанру найти все подходящие фильмы и отобразить карточки с ними;
* когда пользователь сохраняет фильм, он должен отображаться в специальном разделе сайта.

**Как это всё должно выглядеть?**

Сайт состоит из нескольких страниц:
- `Главная страница` Содержит информацию о выполненном проекте.
- `Страница с фильмами` На ней есть форма поиска фильмов и блок с результатами поиска.
- `Страница с сохранёнными фильмами`. Показывает фильмы, сохранённые пользователем.
- `Страница регистрации` Позволяет пользователю зарегистрировать аккаунт.
- `Страница авторизации` На ней пользователь может войти в систему.
- `Страница редактирования профиля` Пользователь может изменить данные своего аккаунта.

На страницах есть одинаковые блоки: они несколько раз используются в разных частях сайта. Повторно используемые компоненты нужно создавать на «Реакте» и использовать БЭМ для описания стилей.

### Ссылки
- [План-график выполнения задач](https://github.com/users/pnrf/projects/1)
- репозиторий backend: [movies-explorer-api](https://github.com/pnrf/movies-explorer-api)
- репозиторий frontend: [movies-explorer-frontend](https://github.com/pnrf/movies-explorer-frontend)
- cсылки на сайт, размещенный в Яндекс.Облаке:
  - Public IP Address: `51.250.79.113`
  - Frontend: `pankratov.nomorepartiesxyz.ru`
  - Backend: `api.pankratov.nomorepartiesxyz.ru`
