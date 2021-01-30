# Periodic Table API
A simple NodeJS API for **Periodic Table Elements** returns in JSON format.

---

## JSON Data

I got this data from [Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
```json
    {
    "name": "Hydrogen",
    "appearance": "colorless gas",
    "atomic_mass": 1.008,
    "boil": 20.271,
    "category": "diatomic nonmetal",
    "color": null,
    "density": 0.08988,
    "discovered_by": "Henry Cavendish",
    "melt": 13.99,
    "molar_heat": 28.836,
    "named_by": "Antoine Lavoisier",
    "number": 1,
    "period": 1,
    "phase": "Gas",
    "source": "https://en.wikipedia.org/wiki/Hydrogen",
    "spectral_img": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hydrogen_Spectra.jpg",
    "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    "symbol": "H",
    "xpos": 1,
    "ypos": 1,
    "shells": [
        1
    ],
    "electron_configuration": "1s1",
    "electron_configuration_semantic": "1s1",
    "electron_affinity": 72.769,
    "electronegativity_pauling": 2.2,
    "ionization_energies": [
        1312
    ],
    "cpk-hex": "ffffff"
    }
```
---

## Development
### Install Repository
```git
git clone https://github.com/boraoksuzoglu/periodic-table-api
```

### Run Project
Install node modules and run project.
```
npm install
npm run devStart
```

### Finish
```
Your project is running on https://localhost:3000.
```
---

## Get

| Path | Method |Description |
| ----------- | ----------- | ----------- |
| / | GET | List all elements in periodic table |
| /name/ | GET | Get specified element by atomic name in periodic table |
| /number/ | GET | Get specified element by atomic number in periodic table |
| /symbol/ | GET | Get specified element by atomic symbol in periodic table |
| /period/ | GET | List all elements in specified period in periodic table |
| /category/ | GET | List all elements in specified category in periodic table |
| /spectral/ | GET | Get spectral image of specified element by atomic name or atomic symbol |
| /random | GET | Get random element from periodic table |

## Params

| Param |Description |
| ----------- | ----------- | ----------- |
| ?page=`number` | Page of elements in JSON data |
| ?limit=`number` | Limit maximum elements in JSON data |
| ?reverse=`true` | Reverse elements list |
| ?sort_by=`feature` | Sort elements by specified element feature in periodic table |
| ?filter[`feature`]= | Filter elements by specified element feature in periodic table  |

---
## Examples

3 dots (...) means there is a continuation.

```
GET /?page=59&limit=2
```
```json
[
  {
    "name": "Tennessine",
    "appearance": null,
    "atomic_mass": 294,
    "boil": 883,
    "category": "unknown, probably metalloid",
    "color": null,
    ...
  },
  {
    "name": "Oganesson",
    "appearance": null,
    "atomic_mass": 294,
    "boil": 350,
    "category": "unknown, predicted to be noble gas",
    "color": null,
    ...
  }
]
```
---
```
GET /?name=Hydrogen 
```
```json
{
    "name": "Hydrogen",
    "appearance": "colorless gas",
    "atomic_mass": 1.008,
    "boil": 20.271,
    "category": "diatomic nonmetal",
    "color": null,
    ...
}
```
