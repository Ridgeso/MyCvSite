from bs4 import BeautifulSoup
from urllib.request import urlopen
import os


class Links:
    URL = "https://github.com/Ridgeso?tab=repositories"
    PATH = "https://github.com"
    README_LEN = 300
    link_set = []

    def __init__(self, name: str, link: str) -> None:
        self.name = name
        self.link = link
        img_val = self.get_img()
        self.img = os.path.join("projects", img_val[0])
        self.img_info = img_val[1]

    @classmethod
    def get_urls(cls) -> None:
        code = urlopen(cls.URL).read()

        soup = BeautifulSoup(code, "html.parser")
        links = soup.find_all(class_="wb-break-all")

        for link in links:
            link = link.find("a")
            rep_name = link.get_text(strip=True)
            rep_path = cls.PATH + link.get("href")
            cls.link_set.append(cls(name=rep_name, link=rep_path))

    def get_img(self) -> tuple[str, str]:
        img_list = os.listdir(os.path.join("static", "projects"))
        
        for img in img_list:
            if self.name in img:
                return img, self.name
        return "Menager.jpeg", "Image cannot be found "

    def __repr__(self) -> str:
        return f"{self.name} : {self.link}\n{self.text}\n"
