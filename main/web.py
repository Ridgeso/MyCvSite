from typing import List

from bs4 import BeautifulSoup
from urllib.request import urlopen
import os


class Links:
    Prefix = "https://github.com"

    class Project:
        def __init__(self, name: str, link: str, img: str) -> None:
            self.name = name
            self.link = link
            self.img = img
        
        def __repr__(self) -> str:
            return f"{self.name} - {self.link} - {self.img}\n"

    def __init__(self, profile: str) -> None:
        if profile.startswith(self.Prefix):
            self.profile = profile
            if self.profile[-1] == '/':
                self.profile = self.profile[:-1]
        else:
            self.profile = self.Prefix + '/' + profile

        self.repositories = self.profile + "?tab=repositories"

        self.projects = self.find_projects()
    
    def find_projects(self) -> List[Project]:
        code = urlopen(self.repositories).read()

        soup = BeautifulSoup(code, "html.parser")
        links = soup.find_all(class_="wb-break-all")

        projects = []
        for link in links:
            link = link.find("a")

            rep_name = link.get_text(strip=True)
            rep_path = self.Prefix + link.get("href")
            rep_img = self.get_image(rep_name)

            project = self.Project(rep_name, rep_path, rep_img)
            projects.append(project)
        return projects
    
    @staticmethod
    def get_image(rep_name: str) -> str:
        img_list = os.listdir(os.path.join("static", "projects"))
        
        for img in img_list:
            if rep_name in img:
                img_name = os.path.join("projects", img)
                return img_name
        return "projects/basic.jpg"
