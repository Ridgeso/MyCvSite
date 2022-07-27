from bs4 import BeautifulSoup
from urllib.request import urlopen
import os


class Links:
    URL = "https://github.com/Ridgeso?tab=repositories"
    PATH = "https://github.com"
    README_LEN = 300
    link_set = []

    def __init__(self, name: str, link: str, text: str) -> None:
        self.name = name
        self.link = link
        if text != "...":
            self.text = text
        else:
            self.text = "Update is comming soon..."
        img_val = self.get_img()
        self.img = os.path.join("projects", img_val[0])
        self.img_info = img_val[1]

    @staticmethod
    def get_readme(path: str) -> str:
        code = urlopen(path).read()

        soup = BeautifulSoup(code, "html.parser")
        context = soup.find(class_="markdown-body entry-content container-lg")
        readme = ""
        readme_len = 0
        if context is not None:
            for paragraph in context.find_all("p"):
                text = paragraph.get_text(strip=True)
                for word in text.split(" "):
                    if readme_len + len(word) < Links.README_LEN:
                        readme += " " + word
                        readme_len += 1+len(word)
        return "..."
    
    @classmethod
    def get_urls(cls) -> None:
        code = urlopen(cls.URL).read()

        soup = BeautifulSoup(code, "html.parser")
        links = soup.find_all(class_="wb-break-all")

        for link in links:
            link = link.find("a")
            rep_name = link.get_text(strip=True)
            rep_path = cls.PATH + link.get("href")
            rep_text = cls.get_readme(rep_path)
            cls.link_set.append(cls(
                name=rep_name,
                link=rep_path,
                text=rep_text
            ))

    def get_img(self) -> tuple[str, str]:
        img_list = os.listdir(os.path.join("static", "projects"))
        
        for img in img_list:
            if self.name in img:
                return img, self.name
        return "", "Image cannot be found "

    def __repr__(self) -> str:
        return f"{self.name} : {self.link}\n{self.text}\n"
