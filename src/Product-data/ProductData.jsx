import React from 'react'

const ProductData=[
  {
    id:1,
    model:"Apple Phone",
    price:123000,
    image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREhEREREPEREREREPEQ8REBEQDw8QGBQZGRgUGRgcIS4lHB4rHxgYKDomLC8xNTY1GiQ7QDszPy40NTEBDAwMEA8QHxISGjQkJSQ1NDQ0NDQxMTQ0NDE0NjE6NDQ0NDE0NDQ0NDY0MTQ0NDQxNjQ0NDQ0PTE0NDQxNDQ9NP/AABEIAOcA2gMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xABJEAACAQICBAgJCQYGAgMAAAABAgADEQQhBRIxQQYiMlFhcXKyBxM0c3SBkaGzFCMkM0RTkrHSF0JSYqLRQ2OCweHwZOJUo8L/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQADAAIDAQEAAAAAAAAAAAABAhEDMRIhMkEi/9oADAMBAAIRAxEAPwDXcXilpLrNckkKqjNmY7FE57JVca1WoaSnMU6TFWXmu+2/u6BsijZq9Soc1oKEUbtZs2I6creoc0rvDPhQuj0B1Veu4ZkV7+LpqLA1GtmcyoAFixNhazGRI73yegdpdv5mOsfbaKOEw7Ek3uTcmw2+yY9gfCvi1qa1RFq078i9OkQOiyH3k9c1vg1p+hj6K16JJViVZWAD06i21kcA5MLg8xBBEB44PDDM5DnNh/tKfpbTKF2p4RFCoSpr1FVwzDaFW2f/AHeCB3OHGkGp0BTQlXrME1gbFU/eYdIB2b5nGNxiUULkWVeIiC/GIHMNoGQsN5A33AdQYtxtr1W6LqQOqy5QLjLEnxlfO2RZyotzDYPVtmf4jhJW19o4p5ACkL/KWsc+yAJbeD2l6OLBRUaliUQt4otrpXRc2KNt1wMyp3bL2MJdcY8feVfaf7TpaJwz4okU6lXVU2Z2YhQcjbpOY9vUDyWqWAtmTYDpJmgYDDihRRFN2Izf+LeX9eZ/1SlrZCa101R0ZRogB3d2G0s9y3WNh9QEc8XhjbIjO+Q1b9BsMx0Sg8MOH5wtRqOFCayMyPXYB3d1NmVAeKqqcixvcggDImReDnhVYMqY1DqMQDiFKtqdLIFF15yDccxlMtPtfYhpnicNze4f2kfHVsJQptUqclRsCgsx3KBbMnmnYoVwygg5dBuNl8jvFiDfmImdcONJmpifF3Oph0D23M75hvUAcucCTSvlOapa3jG4i4/TdWoTqauHp7lQKanWXtkf+DlIg0g++tWbp3n1gTgaX0n4kWFtci5JOSCwPuBGYzuygWN5C4N8JHXEBXAdavENyUGvmVzFzmcsyeVsnXkV9Ob+re1tXSDD/Er+ssT7SIsaR/zK3tP9p2MPXSogqITqk6hDcpHAvqm23LMGT8BR8Y+rcgAXNtstORGojZnFcpY9WNhWqX5i9j+UlqWP+JV/HO5pzRVNV4wDrkCHzNzvBGY6xKygNKp4u5ZGGtTY7bbCp6Rl6iJFZi0bCbRNZyU0BvvKv44YRv46v44SmKBk5CNGKZ+8q/jMPxZ+8q/jMMGLBjINkkUzuqVh0h849QxeKonWp4qo/wDl4giojD+G4F067GJEEZCdlbNBacXFa1NlNOvTA8ZSPMdjqd6n/jcZ2pmtWuaL0sSt9ai66wH79J2Csp6Mwb8wPOZo6uCAQcjnMbVyWlbbDkYVuLXP/lVF9QeY34YFc4lmIOrqULHdqhq/5M/9QmyYZyVrXJNsVUUX3APYCV7hNoCnjUsbK6Fwj2DCxPGRgdqnLL8iAZVdgQZNXIbjYg/vay2Bz2ABt2/2at4Eg4XFsb+Lerh1TPimqtOqXsOcKyXPSs4Y8GdbX5K6l9orEJ+EoWA/1X6ZqHB7RqYDD6vFIpI5CoNVFW2swG+5IzJuTvkzOoiHJ4f1L1cML7Hqew0n/T7pm3CB7iiP5i3Uxqbf6QfVO5pPS5xWOxCmxGFrLQVrcYuaVfxzE9LIBbYAi2nF0qobxYO+m3T/AIjSFlNw9gGUjjWIsbizZC9rjZnO/wADrtpLCeLuoFfXuTyKK3LXPYuPXIWIwGsblGY/xqwUt1kg33br85M6uhcO9Mtqjxauuq521HQ7VLbgeiwz2b5Mz6xGLhh6is+FtyWxGH1Qf4TVSw9k02obKvRTS3tUTHRpPVxGCpKBetjsPTYkXtRV01wOYksB1AzYa3IHm07yzDkaUeadLqy4g+MJvqgXO5xdXv064f2yPUdNw1eM536oW41RmTuv7ZsHC3gQuKdqlLVDMSXQ3A1rWLqwzUnK+0GwuDtnF0D4OKiVVaotMBWDDXfxoFt4UKoJ67y8csRXETSdaNwGR0wGFSpcMmFw6spBDK2rcKRuIQoLSg8IagavXORvUK3G8Bz/AHl74Q48YLBu4u+qju9zxnCqzEE/zEKvUxmV08U1WilVyC9QK7EAAazNc2G4S3B7mZU5vVcVvhGWZ6pvlrtfqFRwfVdqfu5pz0qIACMmAYq4OavddQ7d1ju39Vu7jU1qlTf87U5v42G/oJFjkbzlHR6g3Cnq1iF9mZ/qnRMTvpjW8Zkr/wAE8aalOs+wOcMq82uGZnUdIXW9ss+Dxjo4anmwGa2upHTzDpMonBzF6iFGsBTBZEUBVAPKPSctp5+kkjSmNeo5pa3EUgFdiu+92588hfYAOmT1XO0fVtj00PSmkK9VQzoFpg7aZV0vzsykgeuV7Gvc0jzVCPUVz/ISr4PFVsLUD0yadQZFWUhXXelRf3lPMefLcZZtIlNak6CyVDTr01OZRXp62r6iSPVIrPrMxFond3U9XjitIivHVeShJBiwYwrxxWhJ8GCNqYsGAxpA/M1TzU3I6wpI/KaJoxr0KB56NM/0CZ3pE/M1vNVO4ZoWiR9Hw/mKXcEpdeqDheTW9Lq9+VvhTwjTAJcgNUfXZVa+oiBrF3tmRcgBRmxNsrEiyYTkV+jF1j/XMa8LSVPlNW4OqFw9ubUD4gewM4/Esyao37Scd4zWD8S/I8XQAtzW1Sf6r9M0rgpwlp6ToupASpqFaiLezIw1Sy3zFibEZ2uMzeYOWpamQz1Txrnla62yvs1LjZtlz8EmuMSSL6pFS/SurY+/U9ktMYiJ10tIaNNDF13Ng1erSd03iotHEB3HOrXDA85YZWnE0o4GoTsCOec/WNu3y9cNz85QP87fCqSgaZyNA/zsl9wYOCpPUWU+qVWcjEaSZWKrkQbEDVNjvBY3ueoW6TJujdJa51W25C+QIJyFxstfK4tna4zvK/hgoDBhxgLAG41WuMyAQcs/XHabBqralwnHtzhSGC36c1HXLTX1uq77W3CUw2MwetlbG4WpTbdfxqB09dgeteszb8RyB2KfeSYxoh9athL/APy8Kf8A7km0YgHUB/y0P4Sp/wBpz8jWjOeGPDw4V2o4bV11ZlaoQHJcZMEU5AKcixvcggDImV3RPhLxaVB48rVQnNXWmgt2kVSvWQR0SoaVDCuvjib6ig55663WoOvxi1PWZGxjJYaosdZydttXW4u0nd+c1jirNdVm87j0DpMJpHA69PWZHVtZNj6pVkde0Lk9ai22Zr8n8VSWkWDeLCprDINqsRf3S6+DDXXBMHv9Zv5/FoG949xlZ4QfXVvOMf6zI4PVphXm+YlVsdWCvVJt9bVOZsLBzcnozHrIG+cs6RN99uytvZt/qj2nlOtW5vGa3+gu5v1cen7RIimmE2E8Vt55ZZdXfs1b7ufnE6JmZmfeYyrWM9xrs6PxA1lYHJgUe2wo2V+ixtcbrDbcEyMbh6muXpqXbLxlNeWrAW1kG1lNr5XN7+rhaMJ1TzMzW6gFv79T2SxvjUFJXcaz31BY6ra+8627Zf1iTHuuyrPq2QawGDr1WAKPRRba9WspppTW+bANbWPQN5F7bZZq+IFRkKAqiuiU1O1aaJqrfpNr+uV/R+MR2CsrXHGXWdnvbaBrck2/3nVom/iwbX175ZA2XM+0yaxGaWmdyXXDRxXkYNFhoVS1eOo8hK8dR4E1Wi1aRFePq8AtIfU1vNVO4Zb9G6dprRorqVcqVMf4e5R/NKZj2+Zq+aqdwyxYDRFc0qRCpY00tx/5R0Sts/V67+O5owXGIHPiq/eM4fCzgymNUclaqBlR2AKupFirA5EGwuDzA5EAztaFYlKpNrnE1jls5ZnRIB2zFswZ/Blidf6ohb7Q7NTt0cW9ujWPXNB4L8GhgkyUmowAJCEBVH7o6Jczhk5vfB8mTm95gZtw3BFShcEcdrXBF/mnlSxuGWojI3JbO4GsUcCwa28WJBG+8uXhFIFWggGQOtvvdkqg90e0yqK0JVTGaJqk8ai1Q5DxlE62uOdrAm/SVByzJ2xzB6MqDIUaqLe5uj6zH2Z+63NfOWnUU7QI4tFOaBC0VScYjCXpuAMXhsyjgAeOTom5BNZE5wi9R4oymS6Ow6nEYcDIisj7T+4df/8AM1+hyE7C/kJlbtarNeF/AL5S71KIQl2LvSYlSHtYurDME2F8iDYXFwDK1orwa1/GA1ENMA31mJdh1DVAv0m83BqYO0Axv5OvNK/11Er5DiaPwC4ektJEYIi2HFOZ3nrmbab+vqg/xvcHtGbE+HQA5bumYzpt9bEVjkPnaqi2ywqOB7gJrwRlpY80/wAw4uOwmvmCBUA1eNbUqLa1iTkDbLPIjmsDOG+h2DX8RVt/KHZD1WB70tQN4a0k5hOmYie2EWmOldTB1B/g1RbIAUnAA3AC2QzPtO0m8kUsBUcGmadZMw6saT6oYZEHLePyneWinN744tJeb3mT+Yrs7rl6P0U9M67kAgEDIhVvtOYBOWWzfOvhkOtrnIAaqA7elj1xSIo3C8dBiIz0mZ2dk8DDBjQMUDCDytFq0YBigYEpHjyPIatHEeA9jW+aq+bqdwzQ9FaQT5PQyf6ml+7/ACCZtin+bqebfumXfRf1FDzNLuCVsvVP0HyKnpFXvmdKc3QfIqekVe+Z0pi2HBChwMx8I/19L/T3K8qqtLT4ST8/S617leVFWhKSrR1WkZWjitA6WiD9Kw/bbuPNdochOwv5CY/oU/SsN22+G82ChyE7C/kJlbtaC4IIJCxFbY3VMP0yfn6vna3xXm4VtjdUwzTZ+kVfO1vivNeHuWPN1COrRxWkdTHFadLnSVaOK0jK0dVoEhWiwZHVo4rQHgYoGNAxQMB0GLBjIMWDAcBjgMaBhgwFYlvm6nYfumaDovD1PEUOI31NLm/gHTM7xB+bqebfumaVorSD/J6GSfU0tzfwDplbL1O6DB1KoIsRiKwIO0cczpyBor7R6VW75k+YtghiFDgZf4S1PjqJtkWAB5yErXHvHtlPBl38KYs2F84/wmlEBhJ9THFaMKYtTA6WiaoTFYYtsNUJkL8ZwUX3sJstHkJ2F/ITEsAfn8L6VhvipNsochOwvdEyt2tU7BChyFyKvJbqmF6fUjE1QRY+Mqn1Gq5Hum6tsPVMP4W5Yyt2277TXh+pYc3y5gMWDGQYsGdLnPq0cVpHUxxWgSFaLVowrRxTAfVosGMKY4pgOgxYMaBi1MB0GKBjQMWDAGIPzb9h+6ZoOi/qKHmaXcEzvEH5t+w/dM1LRWjm+T0OOPqaX7h/gHTK2Xqf0V9o9Krd8yfOfor7R6VW75nQmLYIBBBAzfwq7cL5x/hNKEDL54VduF84/wAJpQQYSdBi1MZBiwYE3Rx+kYX0rDfFSbfQ5Cdhe6JhujT9IwvpWG+Kk3GhyE7C/kJlftap2CFDlVwfYeqYdwv8srdtu803Bth6ph3C/wAsrdtu+024fpjzfLjgxYMaBigZ0uY8DFqYyDFqYEhWi1bdIOKrFEZhtyA6CTa/+/qnHo1SrhySTe7E5kg5H3SYhGrLcluZQeq9pIUzmlvXJeHFht2523CJIS1MWDGFMcBkJPKYoGNAxQMAYk/Nv2H7pmz6J8nw/maXcExfEn5up5t+6ZtGifJ8P5ml3BKXXoh6K+0elVu+ZPnP0V9o9Krd8ydMmxUF4mHAzfwrfZfOP8NpQQZffCt9l86/w2lABhJYMUDEAwwYE3Rh+k4T0rDfFSbnQ5Cdhe6JhWiz9JwnpeG+Kk3WhyE7Cd0TK/a9TkOFBKLibYeqYbww8srdtu+03Jth6phnDA/TK3abvtNuD6lhzfLjgxQMQIYM6nMcBigY2DFAwEY5dam1tos3sNz7rzjzvAzn1dHMW4hXVPOSCvRsziJRJ/B1dZBzrxT6tnutOjhqtxbeN+605uHwToTxlYEZ5FSD/wBvOjQTVHSdpkyiEtTFqYwrRxTIWPgxQMZUxYMA8Qfm37D90za9E+T4fzNLuCYjXPEfsP3TNu0V5PQ8zS7glLr0QdGHPEelVu8ZOvIGjduI9Krd4yZeZNi7wXibwXgZz4VfsvnX+G0oEv3hV+y+df4TSgwkYMUDEQwYEzRXlOE9Kw3xUm7UOQnYTuiYRoo/ScJ6XhvjJN4o8hOwvdEyv2vUuHCglFwbYeqYZwx8srdpu+03J9h6phnDHyyt2m77Tfg+pY83y4oioiHedLlLBigYiGDAcBi1MaEUDAeBi1MZUxYMCQpi1MjqY6rQH1aKDRlTHFMBVc8R+w/dM3DRPk+H8zS7gmGVjxH7Dd0zc9FeT0PM0u4JS69HP0dtxHpVbvGTZB0ftxHpNbvmTbzJsOCFBeBnHhU+y+df4Tyggy/eFT7L51/hPKBCS4IkGGIEvRR+lYT0vDfGSbzR5Cdhe6Jg2ivKsJ6XhvjJN4ochOwndEyv2vU5DhQSi4n2HqmG8MfLK3abvtNyfYeqYZwx8srdpu+024PqWPN8uLBChidTlHFXiYBAWDFAxAhgwHAYsGNAxQMB5TFqYyDFgwH1aLVowpjitAXVPEfst+Rm76J8nw/maXcEwaoeK3Zb8pvOivJ6HmaXcEpdejnaP24j0mt3zJch4DbiPSa3fMmTJsOCFBAzrwqfZfOv8J5QJfvCn9l863wnlAhI4AYIIEzRPlWD9Kw3xkm80eQnYTuiYLonyrCel4b4yTeqPITsJ3RMr9r1OQQoczXE+w9Uwvhj5bW7Td9puj7D1TC+GXltbtN32m/B3LHm+XFghQTqcpUEKCAoGKERDvAWDFAxAMMGA4DFgxoGKBgPAxYMZBigYDrnit2T+U33RXk9DzNLuCefnOR6j+U9A6K8noeZpdwSl16OZgduI9Jrd8yXImB21/Sa3fMlTJsO8EEEDOvCn9l863wnlBl98Kf2XzzfCeUKEhDhQQJeifKsJ6XhvjJN7o8hOwndEwTRPlWE9Lw3xkm90eQnYTuiY8na9S4IIJRcH2HqmFcMvLa3We+03R9h6phfDLy2t1nvvN+DuWPN8uLBCgnU5Rw4UEA4cTDgKEMGJhwFgxQMbBigYDgMWDGQYoGA6xyPUfynoPRXk9DzNLuCeeScj1GehtFeT0PM0u4JS69HLwW2v6TW75kuRcIADXs2t9Iqk5EWOsbrnzSRMmxUETDgZ14U/svnm+E8ocvXhTJvhRbLxjktcZEU2sLdNz+HplEhI4IUOBK0R5VhPSsN8ZJvlHkJ2F7omB6J8qwnpeGy5/nVym+UeQnYTuiY8na9SocKCUXB9h6phXDLy2t1nvvN1fYeqYVwx8trZfvG3SNdpvwdyx5vlxIcKCdTlHDiYcA4IUEBUOJhwFQ7xMOAsGGDECGIC7z0Toryeh5ml3BPOl56J0ST8nw+VvmKWV/5BKXXo52HGq+IXf41nI5g7MRJEb0ihpVRVtxHARyBfVbYrH1AD1HeQIoHeMwcwRmCJjLYqCCCSM/8KFMlaDbkqFj60KD3tM+mvcMdG/KKDJsyuGtfVcclrb7GxtcbNomRVKbU2KVF1XXJl/IjnB2g7xAKCCCEpGjnCYjCuTYJicO7HmVaqkn2AzfsPyE7C+2wvPO1RbgjnFps/AjT64zDJrMPHJZKq7D4zebczWLDoJG1TMuSP1asrLBBBM2gNsPVMN4bpq46qN+qr/iZyPdabkZmXhG0K7MK6KWZMmVRdnQ7wN5FhlzXtckTXhtEW9suaszX0zyCANfMZg53gnY5AggggCHCggHDiYcBUETDgKEMGJh3gOILso2azKnrZgB+c9G4FCtKkpFitNFI5iFAmL8ANAvi8UlRlPiKDa7sRxXYbF6f7gbbG25Sl5aUj0Q6BgVYAqQQQQCCDtBE5L6KdDehUIU5+LaxW/QxzA9RPTBBM2pAw2L3rQPUW/3Ih/J8V/DS9v8AzBBICKmDxLAg06Vj0/8AtKtpbgPWxBB1aOWwlmRlvzEE85yNxfMg2EEEDjN4MsadlWio5mY1DbrAX8oP2YY372h+E/qgggD9mGN+9ofhP6oeE8HelMO4q4fE0abjfY6rrzMtyGHQRzHaAYIJAu+j10qoC16WEc25dOu4BPYZLj1uZ0QMTvpJ6mH6oIJXwhbykLYn7pPxD9UjY3BV6os1JOvWX9UEEeEHlKlaQ8HNWqxZFRGJudWoFDHnYEMN97gXJ2mc/wDZdjvvaAHNqlj7dYQQTWJlnNYH+y7G/fUPwH9cH7Lsb99Q/Af1wQS3lKvhAfsuxv31D8B/XB+y3G/fUPwH9cEEeUnhAfsuxv39D8Lfqik8F2MBBNXDkAgldVhcc19aCCPKTwhI/ZriOfDjMHbUOw8xbPKL/Zzif/F37mBz6Qf+mCCR5SeMGx4NcSRn8lU7MnqEbRn6wNm65zO2dPAeDOncfKGuAQSKTMA3rNiIII2U+ML9o/AUsNTWlRRaaLsVQButf3SXBBKrv//Z",
    qty:1,
    spec:"PRO 256GB",
  },
  {
    id:2,
    model:"HUAWEI Y70",
    price:7000,
    image:"data:image/jpeg;base64,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",
    qty:1,
    spec:"128GB",
  },
  {
    id:3,
    model:"Nokiya g11",
    price:1888,
    image:"data:image/jpeg;base64,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",
    qty:1,
    spec:"64GB",
  },
  {
    id:4,
    model:"Samsung s21",
    price:1888,
    image:"data:image/jpeg;base64,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",
    qty:1,
    spec:"126GB",
  },
]
export default ProductData;