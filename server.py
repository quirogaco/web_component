
import pprint
import os
root = os.path.dirname(os.path.abspath(__file__))

from fastapi import FastAPI, Response, Request
from fastapi.staticfiles import StaticFiles
import uvicorn

from components.Table.DataTable import *
import dominate.tags as tags

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def main():
    # file_name = 'index_LIT.html'
    # file_name = 'index.html'
    # file_name = 'index_10.html'
    # file_name = 'index_11.html'
    file_name = 'index_12.html'
    with open(os.path.join(root, file_name)) as fh:
        data = fh.read()
    return Response(content=data, media_type="text/html")


# count = 0
# @app.get("/my-component-clicked")
# async def main(request: Request):
#     global count

#     pprint.pprint(dir(request))
#     data = ( """
#     <button hx-get="/my-component-clicked" hx-target="next div">Click me second!</button>
#     <div></div>
#     """ + str(count) )
#     count += 1
#     return Response(content=data, media_type="text/html")


@app.get("/my-component-clicked2")
async def my_component_clicked2(request: Request):
    parameters = dict(request.query_params)
    print(parameters)
    # data = """
    #     <my-component>
    #     </my-component>
    # """

    # data = """
    #     <div>
    #     ABC
    #     </div>
    # """

    data = """
        <my-component name="red">zzzzzzz</my-component> 
    """
     
    return Response(content=data, media_type="text/html")



# print("div:", str(div))

# params = {"name":"usuarios", "id": "usuarios_id"}
# table = DataTable(**params)

# params = {"name":"enbezado", "id": "enbezado_id"}
# header = DataTableHeader(**params)

# for i in range(5):
#     params = {"name":("enbezado_"+str(i)), "id": ("enbezado_id_"+str(i))}
#     column = DataTableHeaderCell(**params)
#     header.add(column)

# table.add(header)

params = {"name":"usuarios", "id": "usuarios_id"}
table = tags.table(**params)

caption = tags.caption("TITULO DE LA TABLA")
table.add(caption)

params = {"name":"enbezado", "id": "enbezado_id"}
header = tags.thead(**params)

for i in range(5):
    texto = ("enbezado_"+str(i))
    params = {"name":texto, "id": ("enbezado_id_"+str(i))}
    column = tags.th(texto, **params)
    header.add(column)

table.add(header)

print("**************************************")
print(table)
print("**************************************")
print()
print()

if __name__ == '__main__':
    # host = "172.19.106.35"
    host = "192.168.111.2"
    port = 8000
    uvicorn.run(app, port=port, host=host)