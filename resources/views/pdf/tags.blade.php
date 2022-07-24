<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <style>
        .page_break {
            page-break-before: always;
        }

        .footer .page-number:after {
            content: counter(page);
        }

        .table tbody tr td, .table thead td th {
            vertical-align: middle;
            text-align: center;
        }

        .footer {
            position: fixed;
            right: 0px;
            bottom: 10px;
            text-align: center;
            border-top: 1px solid black;
        }




    </style>
</head>
<body>


<div class="row">
    <div class="col-12 text-center">
        <h5>Listado de las etiquetas del producto "{{$lote->product['name']}}"</h5>
    </div>
    <div class="col-12">
        <table class="table table-bordered table-sm">
            <thead>
            <tr>
                <th>Fecha de compra</th>
                <th>{{date('d/m/Y',strtotime($lote['buy_date']))}}</th>
            </tr>
            <tr>
                <th>Coste de compra</th>
                <th>{{number_format($lote['cost_price'], 0, ',', '.')}} XAF</th>
            </tr>
            <tr>
                <th>Precio de venta</th>
                <th>{{number_format($lote['sell_price'], 0, ',', '.')}} XAF</th>
            </tr>
            <tr>
                <th>Cantidad total</th>
                <th>{{$lote->quantityReal}}</th>
            </tr>
            <tr>
                <th>Cantidad en stock</th>
                <th>{{$lote->quantityStock}}</th>
            </tr>
            <tr>
                <th>Cantidad vendida</th>
                <th>{{$lote->quantityReal - $lote->quantityStock}}</th>
            </tr>
            <tr>
                <th>Agregado por</th>
                <th>{{$lote->creator['name']}}</th>
            </tr>
            </thead>
        </table>
    </div>
    @if(count($lote->tagsAll))
        <div class="col-12">
            <table class="table table-sm">
                <thead>
                <tr>
                    <th class="text-center">No.</th>
                    <th class="text-center">Código de barras</th>
                    <th class="text-center">Código numérico</th>
                    <th class="text-center">¿Vendido?</th>
                </tr>
                </thead>

                <tbody>
                @foreach($lote->tagsAll as $key=>$tag)
                    <tr>
                        <td>{{$key+1}}</td>
                        <td>
                            <img src="data:image/png;base64,{{$tag['barcode'] }}" height="60" width="180"/>
                        </td>
                        <td>  {{$tag['tag']}}</td>
                        <td>
                            @if($tag['sold_by'])
                                {{date('d/m/Y H:i',strtotime($tag['deleted_at']))}}
                            @else
                                -
                            @endif
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="col-12 text-center text-danger">
            <h6>No hay etiquetas disponibles para este producto</h6>
        </div>
    @endif

    <footer>
        <div class="footer text-center">
            <small>
                Reporte generado por {{config('app.name')}} el {{date('d/m/Y h:iA ')}}
            </small>
            <div style="text-align: right">
                <span>Página <span class="page-number"> </span></span>

            </div>
        </div>
    </footer>

</div>
</body>
</html>
