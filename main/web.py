from typing import List

from bs4 import BeautifulSoup
from urllib.request import urlopen


class Links:
    Prefix = "https://github.com"

    class Project:
        def __init__(self, name: str, link: str) -> None:
            self.name = name
            self.link = link
        
        def __repr__(self) -> str:
            return f"{self.name} - {self.link}"

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

            project = self.Project(rep_name, rep_path)
            projects.append(project)
        return projects
