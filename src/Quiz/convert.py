import os
import json

def convert_txt_files_to_json(directory):
    # Перебор всех файлов в указанной директории
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            txt_file_path = os.path.join(directory, filename)
            json_file_path = os.path.join(directory, filename.replace(".txt", ".json"))

            questions = []

            # Чтение вопросов из текстового файла
            with open('/C:\Users\Илья\Documents\GitHub\diplomInterview\diplomInterview\src\Quiz', 'r', encoding='utf-8') as file:
                for line in file:
                    question_text = line.strip()
                    if question_text:  # Пропускаем пустые строки
                        question_data = {
                            "question": question_text,
                            "options": ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],  # Замените на реальные варианты
                            "answer": "Вариант 1"  # Замените на правильный ответ
                        }
                        questions.append(question_data)

            # Запись вопросов в JSON-файл
            with open(json_file_path, 'w', encoding='utf-8') as file:
                json.dump(questions, file, ensure_ascii=False, indent=4)

# Пример использования
convert_txt_files_to_json('/C:\Users\Илья\Documents\GitHub\diplomInterview\diplomInterview\src\Quiz')
