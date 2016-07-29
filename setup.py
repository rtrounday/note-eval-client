try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

setup(
    name='PricePopulater',
    version='1.0.0.dev1',
    description='A script to populate Zillow and Trulia housing values given an Excel sheet of addresses',
    long_description=open('README.md').read(),
    url='https://github.com/rsandeep15/RealEstateProject',
    author='Sandeep Raghunandhan',
    author_email='sandeep.raghunandhan@yahoo.com',
    packages=['pricepopulate'],
    install_requires=[
        "et-xmlfile == 1.0.1",
        "jdcal == 1.2",
        "openpyxl == 2.3.5",
        "pyzillow == 0.5.5",
        "requests == 2.10.0",
        "selenium == 2.53.6",
        "setuptools == 2.0"
    ]
)
