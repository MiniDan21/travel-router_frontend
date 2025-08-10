# React + TypeScript + Vite

Проект на **React**, **TypeScript** и **Vite** с поддержкой горячей перезагрузки (HMR) и базовыми правилами ESLint.

---

## 1. Установка Node.js (если не установлен)

### Windows / macOS
1. Перейти на [официальный сайт Node.js](https://nodejs.org/).
2. Скачать **LTS**-версию (рекомендуется).
3. Установить, оставив настройки по умолчанию.
4. Проверить версии:
    ```bash
    node -v
    npm -v
    ```

### Linux (Debian/Ubuntu)
```bash
# Обновить список пакетов
sudo apt update

# Установить curl (если нет)
sudo apt install -y curl

# Подключить репозиторий Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

# Установить Node.js и npm
sudo apt install -y nodejs

# Проверить версии
node -v
npm -v
```

## 2. Установка пакетов

### Клонирование репозитория
```bash
git clone https://github.com/MiniDan21/travel-router_frontend.git
cd travel-router_frontend
```

### Установка через npm
```bash
npm install
```

## 3. Запуск проекта
```bash
npm run dev
```

