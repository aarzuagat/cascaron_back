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
        td, th {
            vertical-align: middle;
        }



    </style>
</head>
<body>


<div class="row">
    <div class="col-12 text-center">
        <h5>Listado de las etiquetas del producto {{$lote->product['name']}}</h5>
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
                <th>{{$lote->quantity_real}}</th>
            </tr>
            <tr>
                <th>Agregado por</th>
                <th>{{$lote->creator['name']}}</th>
            </tr>
            </thead>
        </table>
    </div>
    <div class="col-12">
        <ol>
            @foreach($lote->tagsAll as $tag)
                <li>{{$tag['tag']}}</li>
            @endforeach
        </ol>
    </div>
    Reporte generado por {{config('app.name')}}
    <div class="col-12">
        <footer>
            <div class="footer text-center" style="position: absolute; bottom: 0; font-size: 12px">
                <small>
                    Reporte generado por {{config('app.name')}} el {{date('d/m/Y h:iA ')}}
                </small>
                <div style="text-align: right">
                    Página <span class="page-number"> </span>
                </div>
            </div>
        </footer>
    </div>
</div>
</body>
</html>
