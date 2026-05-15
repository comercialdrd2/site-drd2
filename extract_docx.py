
import docx
import os

def extract_text(file_path):
    doc = docx.Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

if __name__ == "__main__":
    file_path = "AVCB PALAVRA CHAVE.docx"
    output_path = "original_texts.txt"
    if os.path.exists(file_path):
        text = extract_text(file_path)
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Text extracted to {output_path}")
    else:
        print(f"File {file_path} not found")
