<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{config('app.name')}}</title>
    <link href=/css/vendor.8c4a6e95.css rel=stylesheet>
    <link href=/css/app.4d229770.css rel=stylesheet>
    <link rel="icon" href="{{ asset('/logo.png') }}" type="image/x-icon"/>
    <style type="text/css">
        [v-cloak] > * {
            display: none
        }
    </style>
</head>
<body>
<div id="q-app" v-cloak>
</div>
<script src=/js/vendor.829ad792.js></script>
<script src=/js/app.02a057ca.js></script>
</body>
</html>
