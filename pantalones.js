//--------------------------------------//
//--|funcionalidad_menu_de_navegacion|--//
//--------------------------------------//
document.getElementById('barraBusqueda').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query !== '') {
            window.location.href = `busqueda_de_productos.html?query=${encodeURIComponent(query)}`;
        }
    }
});
//--------------------------//
//--|funcionalidad_filtro|--//
//--------------------------//
const contenedor = document.getElementById('contenedor-productos');
const productos_con_precios_altos = `
    <div class="categorias_de_precios_altos">
        <div class="producto_precio_alto1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$400.000
            </div>
        </div>
        <div class="producto_precio_alto2">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_precio_alto3">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$245.000
            </div>
        </div>
        <div class="producto_precio_alto4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_precio_alto5">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$137.990
            </div>
        </div>
        <div class="producto_precio_alto6">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_precio_alto7">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_precio_alto8">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$115.000
            </div>
        </div>
    </div>
`;
const productos_con_precios_bajos = `
    <div class="categorias_de_precios_bajos">
        <div class="producto_precio_bajo1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_precio_bajo2">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$85.500
            </div>
        </div>
        <div class="producto_precio_bajo3">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$78.100
            </div>
        </div>
        <div class="producto_precio_bajo4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$60.999
            </div>
        </div>
        <div class="producto_precio_bajo5">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_precio_bajo6">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_precio_bajo7">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_precio_bajo8">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_precio_bajo9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_precio_bajo10">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$39.999
            </div>
        </div>
        <div class="producto_precio_bajo11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_precio_bajo12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_precio_bajo13">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_precio_bajo14">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_precio_bajo15">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_precio_bajo16">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_mas_vendidos = `
    <div class="categorias_mas_vendidos">
        <div class="producto_mas_vendido1">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_mas_vendido2">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_mas_vendido3">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$78.100
            </div>
        </div>
        <div class="producto_mas_vendido4">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$115.000
            </div>
        </div>
        <div class="producto_mas_vendido5">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$60.999
            </div>
        </div>
        <div class="producto_precio_alto6">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_precio_alto7">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_precio_alto8">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_mas_recientes = `
    <div class="categorias_mas_recientes">
        <div class="producto_mas_reciente1">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_mas_reciente2">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_mas_reciente3">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_mas_reciente4">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_mas_reciente5">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_mas_reciente6">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_mas_reciente7">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_mas_reciente8">
            <div class="producto-header">
                Masomy - r
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_con_descuentos = `
    <div class="categorias_mas_descuentos">
        <div class="producto_mas_descuentos_1">
            <div class="producto-header">
                Masomy 20%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_mas_descuentos_2">
            <div class="producto-header">
                Masomy 10%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_mas_descuentos_3">
            <div class="producto-header">
                Masomy 5%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_mas_descuentos_4">
            <div class="producto-header">
                Masomy 15%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_mas_descuentos_5">
            <div class="producto-header">
                Masomy 8%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_mas_descuentos_6">
            <div class="producto-header">
                Masomy 10%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_mas_descuentos_7">
            <div class="producto-header">
                Masomy 30%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_mas_descuentos_8">
            <div class="producto-header">
                Masomy 15%
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_hombres = `
    <div class="categorias_por_hombres">
        <div class="producto_de_hombres_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_de_hombres_2">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_de_hombres_3">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$245.000
            </div>
        </div>
        <div class="producto_de_hombres_4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_de_hombres_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_de_hombres_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_de_hombres_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_de_hombres_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_de_hombres_9">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_hombres_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_de_hombres_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_hombres_12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
    </div>
`;
const productos_mujeres = `
    <div class="categorias_por_mujeres">
        <div class="producto_de_mujeres_1">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_mujeres_2">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_de_mujeres_3">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_mujeres_4">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_de_mujeres_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_de_mujeres_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_de_mujeres_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_de_mujeres_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_de_mujeres_9">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
    </div>
`;
const productos_ninos = `
    <div class="categorias_por_niños">
        <div class="producto_de_niños_1">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_de_niños_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_de_niños_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_de_niños_4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_de_niños_5">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_niños_6">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_de_niños_7">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_niños_8">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_de_niños_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$137.900
            </div>
        </div>
    </div>
`;
const productos_ninas = `
    <div class="categorias_por_niñas">
        <div class="producto_de_niñas_1">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_de_niñas_2">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_niñas_3">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_de_niñas_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_de_niñas_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_de_niñas_6">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_niñas_7">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_niñas_8">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_niñas_9">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_de_niñas_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_de_niñas_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_de_niñas_12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
    </div>
`;
const productos_bebes = `
    <div class="categorias_por_bebes">
        <div class="producto_de_niñas_1">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_de_bebes_2">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_bebes_3">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_de_bebes_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_de_bebes_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_de_bebes_6">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_bebes_7">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_de_bebes_8">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_de_bebes_9">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_de_bebes_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
    </div>
`;
const productos_xxs = `
    <div class="categorias_por_talla_xxs">
        <div class="producto_talla_xxs_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_talla_xxs_2">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_talla_xxs_3">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_talla_xxs_4">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$115.000
            </div>
        </div>
        <div class="producto_talla_xxs_5">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$60.999
            </div>
        </div>
        <div class="producto_talla_xxs_6">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_xxs_7">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$115.000
            </div>
        </div>
        <div class="producto_talla_xxs_8">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$60.999
            </div>
        </div>
        <div class="producto_talla_xxs_9">
            <div class="producto-header">
                Masomy - v
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_talla_xxs_10">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_talla_xxs_11">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$145.000
            </div>
        </div>
        <div class="producto_talla_xxs_12">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
        <div class="producto_talla_xxs_13">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxs | azul |<br>$90.000
            </div>
        </div>
    </div>
`;
const productos_xs = `
    <div class="categorias_por_talla_xs">
        <div class="producto_talla_xs_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xs | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_xs_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_xs_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_xs_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_xs_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_xs_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_xs_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_xs_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_talla_xs_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$39.999
            </div>
        </div>                    
        <div class="producto_talla_xs_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_talla_xs_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_talla_xs_12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_talla_xs_13">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_talla_xs_14">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$27.180
            </div>
        </div>
        <div class="producto_talla_xs_15">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$24.000
            </div>
        </div>
        <div class="producto_talla_xs_16">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$20.000
            </div>
        </div>
        <div class="producto_talla_xs_17">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xs | azul |<br>$115.000
            </div>
        </div>
    </div>
`;
const productos_s = `
    <div class="categorias_por_talla_s">
        <div class="producto_talla_s_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | s | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_s_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_s_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_s_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_s_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_s_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_s_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_s_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | s | azul |<br>$40.000
            </div>
        </div>
    </div>
`;
const productos_m = `
    <div class="categorias_por_talla_m">
        <div class="producto_talla_m_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_m_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_m_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_m_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_m_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_m_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_m_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_m_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_talla_m_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$39.999
            </div>
        </div>                    
        <div class="producto_talla_m_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_talla_m_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_talla_m_12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$35.100
            </div>
        </div>
        <div class="producto_talla_m_13">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$30.000
            </div>
        </div>
        <div class="producto_talla_m_14">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$27.180
            </div>
        </div>
    </div>
`;
const productos_l = `
    <div class="categorias_por_talla_m">
        <div class="producto_talla_l_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | l | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_l_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_l_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_l_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_l_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_l_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_l_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_l_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_talla_l_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | l | azul |<br>$39.999
            </div>
        </div>                    
    </div>
`;
const productos_xl = `
    <div class="categorias_por_talla_m">
        <div class="producto_talla_xl_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xl | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_xl_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_xl_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_xl_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_xl_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_xl_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_xl_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_xl_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xl | azul |<br>$40.000
            </div>
        </div>                    
    </div>
`;
const productos_xxl = `
    <div class="categorias_por_talla_xxl">
        <div class="producto_talla_xxl_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxl | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_xxl_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_xxl_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_xxl_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_xxl_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_xxl_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_xxl_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_xxl_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_talla_xxl_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$39.999
            </div>
        </div>                    
        <div class="producto_talla_xxl_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_talla_xxl_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$123.000
            </div>
        </div>
        <div class="producto_talla_xxl_12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxl | azul |<br>$35.100
            </div>
        </div>
    </div>
`;
const productos_xxxl = `
    <div class="categorias_por_talla_xxxl">
        <div class="producto_talla_xxxl_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxxl | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_talla_xxxl_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_talla_xxxl_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_talla_xxxl_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_talla_xxxl_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_talla_xxxl_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_talla_xxxl_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_talla_xxxl_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$40.000
            </div>
        </div>
        <div class="producto_talla_xxxl_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$39.999
            </div>
        </div>                    
        <div class="producto_talla_xxxl_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$37.900
            </div>
        </div>
        <div class="producto_talla_xxxl_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | azul |<br>$123.000
            </div>
        </div>
    </div>
`;
// productos por color
const productos_rojo= `
    <div class="categorias_por_color_rojo">
        <div class="producto_color_rojo_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxxl | rojo |<br>$345.000
            </div>
        </div>
        <div class="producto_color_rojo_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$137.900
            </div>
        </div>
        <div class="producto_color_rojo_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$56.190
            </div>
        </div>
        <div class="producto_color_rojo_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$51.000
            </div>
        </div>
        <div class="producto_color_rojo_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$135.000
            </div>
        </div>
        <div class="producto_color_rojo_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$44.990
            </div>
        </div>
        <div class="producto_color_rojo_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$42.000
            </div>
        </div>
        <div class="producto_color_rojo_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$40.000
            </div>
        </div>
        <div class="producto_color_rojo_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$39.999
            </div>
        </div>                    
        <div class="producto_color_rojo_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | rojo |<br>$37.900
            </div>
        </div>
    </div>
`;
const productos_naranja= `
    <div class="categorias_por_color_naranja">
        <div class="producto_color_naranja_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | xxxl | naranja |<br>$345.000
            </div>
        </div>
        <div class="producto_color_naranja_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$137.900
            </div>
        </div>
        <div class="producto_color_naranja_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$56.190
            </div>
        </div>
        <div class="producto_color_naranja_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$51.000
            </div>
        </div>
        <div class="producto_color_naranja_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$135.000
            </div>
        </div>
        <div class="producto_color_naranja_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$44.990
            </div>
        </div>
        <div class="producto_color_naranja_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$42.000
            </div>
        </div>
        <div class="producto_color_naranja_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | xxxl | naranja |<br>$40.000
            </div>
        </div>
    </div>
`;
const productos_amarillo= `
    <div class="categorias_por_color_amarillo">
        <div class="producto_color_amarillo_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | amarillo |<br>$345.000
            </div>
        </div>
        <div class="producto_color_amarillo_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$137.900
            </div>
        </div>
        <div class="producto_color_amarillo_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$56.190
            </div>
        </div>
        <div class="producto_color_amarillo_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$51.000
            </div>
        </div>
        <div class="producto_color_amarillo_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$135.000
            </div>
        </div>
        <div class="producto_color_amarillo_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$44.990
            </div>
        </div>
        <div class="producto_color_amarillo_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$42.000
            </div>
        </div>
        <div class="producto_color_amarillo_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$40.000
            </div>
        </div>
        <div class="producto_color_amarillo_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$39.999
            </div>
        </div>                    
        <div class="producto_color_amarillo_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$37.900
            </div>
        </div>
        <div class="producto_color_amarillo_11">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$123.000
            </div>
        </div>
        <div class="producto_color_amarillo_12">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$35.100
            </div>
        </div>
        <div class="producto_color_amarillo_13">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | amarillo |<br>$30.000
            </div>
        </div>
    </div>
`;
const productos_verde= `
    <div class="categorias_por_color_verde">
        <div class="producto_color_verde_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | verde |<br>$345.000
            </div>
        </div>
        <div class="producto_color_verde_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$137.900
            </div>
        </div>
        <div class="producto_color_verde_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$56.190
            </div>
        </div>
        <div class="producto_color_verde_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$51.000
            </div>
        </div>
        <div class="producto_color_verde_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$135.000
            </div>
        </div>
        <div class="producto_color_verde_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$44.990
            </div>
        </div>
        <div class="producto_color_verde_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$42.000
            </div>
        </div>
        <div class="producto_color_verde_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$40.000
            </div>
        </div>
        <div class="producto_color_verde_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$39.999
            </div>
        </div>                    
        <div class="producto_color_verde_10">
            <div class="producto-header">
                Masomy-s
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde |<br>$37.900
            </div>
        </div>
    </div>
`;
const productos_azul= `
    <div class="categorias_por_color_azul">
        <div class="producto_color_azul_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | azul |<br>$345.000
            </div>
        </div>
        <div class="producto_color_azul_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$137.900
            </div>
        </div>
        <div class="producto_color_azul_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$56.190
            </div>
        </div>
        <div class="producto_color_azul_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$51.000
            </div>
        </div>
        <div class="producto_color_azul_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_color_azul_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$44.990
            </div>
        </div>
        <div class="producto_color_azul_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$42.000
            </div>
        </div>
        <div class="producto_color_azul_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | azul |<br>$40.000
            </div>
        </div>
    </div>
`;
const productos_morado= `
    <div class="categorias_por_color_morado">
        <div class="producto_color_morado_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | morado |<br>$345.000
            </div>
        </div>
        <div class="producto_color_morado_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$137.900
            </div>
        </div>
        <div class="producto_color_morado_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$56.190
            </div>
        </div>
        <div class="producto_color_morado_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$51.000
            </div>
        </div>
        <div class="producto_color_morado_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$135.000
            </div>
        </div>
        <div class="producto_color_morado_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$44.990
            </div>
        </div>
        <div class="producto_color_morado_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$42.000
            </div>
        </div>
        <div class="producto_color_morado_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$40.000
            </div>
        </div>
        <div class="producto_color_morado_9">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | morado |<br>$39.999
            </div>
        </div>                    
        </div>
    </div>
`;
const productos_otros_colores= `
    <div class="categorias_por_otros_colores">
        <div class="producto_otros_colores_1">
            <div class="producto-header">
                Masomy
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | pantalon | m | salmon |<br>$345.000
            </div>
        </div>
        <div class="producto_otros_colores_2">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | verde olva |<br>$137.900
            </div>
        </div>
        <div class="producto_otros_colores_3">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | turquesa |<br>$56.190
            </div>
        </div>
        <div class="producto_otros_colores_4">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | blanco |<br>$51.000
            </div>
        </div>
        <div class="producto_otros_colores_5">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | rosa |<br>$135.000
            </div>
        </div>
        <div class="producto_otros_colores_6">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | gris |<br>$44.990
            </div>
        </div>
        <div class="producto_otros_colores_7">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | marron |<br>$42.000
            </div>
        </div>
        <div class="producto_otros_colores_8">
            <div class="producto-header">
                Masomy-h
                <div>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="producto-body">
                <img src="imagenes/hombres1.jpg" alt="">
            </div>
            <div class="producto-footer">
                | camisa casual | m | negro |<br>$40.000
            </div>
        </div>                    
    </div>
`;
//------------------------------//
//--|mostrar / ocultar extras|--//
//------------------------------//
const btnVerMas   = document.getElementById('btn-ver-mas');
const indicadores = document.getElementById('indicadores');
function ocultarVerMas() {
    if (btnVerMas) btnVerMas.style.display = 'none';
    if (indicadores) indicadores.style.display = 'none';
}
function mostrarVerMas() {
    if (btnVerMas) btnVerMas.style.display = 'block';
    if (indicadores) indicadores.style.display = 'flex';
}
//-------------------------//
//--|Funciones de Filtros|--//
//-------------------------//
function aplicarFiltroOrdenPrecio() {
    const precioAltoEl   = document.getElementById('orden-precio-alto');
    const precioBajoEl   = document.getElementById('orden-precio-bajo');
    const masVendidosEl  = document.querySelector('input[value="mas_vendidos"]');
    const masRecientesEl = document.querySelector('input[value="mas_recientes"]');
    const descuentosEl   = document.querySelector('input[value="descuentos"]');
    const precioAlto   = !!(precioAltoEl && precioAltoEl.checked);
    const precioBajo   = !!(precioBajoEl && precioBajoEl.checked);
    const masVendidos  = !!(masVendidosEl && masVendidosEl.checked);
    const masRecientes = !!(masRecientesEl && masRecientesEl.checked);
    const descuentos   = !!(descuentosEl && descuentosEl.checked);
    if (precioAlto) {
        contenedor.innerHTML = productos_con_precios_altos;
        ocultarVerMas();
    } else if (precioBajo) {
        contenedor.innerHTML = productos_con_precios_bajos;
        ocultarVerMas();
    } else if (masVendidos) {
        contenedor.innerHTML = productos_mas_vendidos;
        ocultarVerMas();
    } else if (masRecientes) {
        contenedor.innerHTML = productos_mas_recientes;
        ocultarVerMas();
    } else if (descuentos) {
        contenedor.innerHTML = productos_con_descuentos;
        ocultarVerMas();
    } else {
        contenedor.innerHTML = '';
        mostrarVerMas();
    }
}
function aplicarFiltroCategoria() {
    const catHombres = document.getElementById('cat-hombres');
    const catMujeres = document.getElementById('cat-mujeres');
    const catNinos   = document.getElementById('cat-ninos');
    const catNinas   = document.getElementById('cat-ninas');
    const catBebes   = document.getElementById('cat-bebes');
    if (catHombres && catHombres.checked) {
        contenedor.innerHTML = productos_hombres;
        ocultarVerMas();
    } else if (catMujeres && catMujeres.checked) {
        contenedor.innerHTML = productos_mujeres;
        ocultarVerMas();
    } else if (catNinos && catNinos.checked) {
        contenedor.innerHTML = productos_ninos;
        ocultarVerMas();
    } else if (catNinas && catNinas.checked) {
        contenedor.innerHTML = productos_ninas;
        ocultarVerMas();
    } else if (catBebes && catBebes.checked) {
        contenedor.innerHTML = productos_bebes;
        ocultarVerMas();
    } else {
        contenedor.innerHTML = '';
        mostrarVerMas();
    }
}
function aplicarFiltroTalla() {
    const tallaXXS  = document.getElementById('talla-xxs');
    const tallaXS   = document.getElementById('talla-xs');
    const tallaS    = document.getElementById('talla-s');
    const tallaM    = document.getElementById('talla-m');
    const tallaL    = document.getElementById('talla-l');
    const tallaXL   = document.getElementById('talla-xl');
    const tallaXXL  = document.getElementById('talla-xxl');
    const tallaXXXL = document.getElementById('talla-xxxl');
    if (tallaXXS && tallaXXS.checked) {
        contenedor.innerHTML = productos_xxs;
        ocultarVerMas();
    } else if (tallaXS && tallaXS.checked) {
        contenedor.innerHTML = productos_xs;
        ocultarVerMas();
    } else if (tallaS && tallaS.checked) {
        contenedor.innerHTML = productos_s;
        ocultarVerMas();
    } else if (tallaM && tallaM.checked) {
        contenedor.innerHTML = productos_m;
        ocultarVerMas();
    } else if (tallaL && tallaL.checked) {
        contenedor.innerHTML = productos_l;
        ocultarVerMas();
    } else if (tallaXL && tallaXL.checked) {
        contenedor.innerHTML = productos_xl;
        ocultarVerMas();
    } else if (tallaXXL && tallaXXL.checked) {
        contenedor.innerHTML = productos_xxl;
        ocultarVerMas();
    } else if (tallaXXXL && tallaXXXL.checked) {
        contenedor.innerHTML = productos_xxxl;
        ocultarVerMas();
    } else {
        contenedor.innerHTML = '';
        mostrarVerMas();
    }
}
function aplicarFiltroColor() {
    const colorRojo     = document.getElementById('color-rojo');
    const colorNaranja  = document.getElementById('color-naranja');
    const colorAmarillo = document.getElementById('color-amarillo');
    const colorVerde    = document.getElementById('color-verde');
    const colorAzul     = document.getElementById('color-azul');
    const colorMorado   = document.getElementById('color-morado');
    const colorOtros    = document.getElementById('color-otros-colores');
    if (colorRojo && colorRojo.checked) {
        contenedor.innerHTML = productos_rojo;
        ocultarVerMas();
    } else if (colorNaranja && colorNaranja.checked) {
        contenedor.innerHTML = productos_naranja;
        ocultarVerMas();
    } else if (colorAmarillo && colorAmarillo.checked) {
        contenedor.innerHTML = productos_amarillo;
        ocultarVerMas();
    } else if (colorVerde && colorVerde.checked) {
        contenedor.innerHTML = productos_verde;
        ocultarVerMas();
    } else if (colorAzul && colorAzul.checked) {
        contenedor.innerHTML = productos_azul;
        ocultarVerMas();
    } else if (colorMorado && colorMorado.checked) {
        contenedor.innerHTML = productos_morado;
        ocultarVerMas();
    } else if (colorOtros && colorOtros.checked) {
        contenedor.innerHTML = productos_otros_colores;
        ocultarVerMas();
    } else {
        contenedor.innerHTML = '';
        mostrarVerMas();
    }
}
//-----------------------------//
//--|Asignación de Eventos|----//
//-----------------------------//
document.addEventListener('DOMContentLoaded', () => {
    // filtros orden
    const precioAltoEl   = document.getElementById('orden-precio-alto');
    const precioBajoEl   = document.getElementById('orden-precio-bajo');
    const masVendidosEl  = document.querySelector('input[value="mas_vendidos"]');
    const masRecientesEl = document.querySelector('input[value="mas_recientes"]');
    const descuentosEl   = document.querySelector('input[value="descuentos"]');
    if (precioAltoEl)   precioAltoEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (precioBajoEl)   precioBajoEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (masVendidosEl)  masVendidosEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (masRecientesEl) masRecientesEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (descuentosEl)   descuentosEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    // filtros categorías
    const catHombres = document.getElementById('cat-hombres');
    const catMujeres = document.getElementById('cat-mujeres');
    const catNinos   = document.getElementById('cat-ninos');
    const catNinas   = document.getElementById('cat-ninas');
    const catBebes   = document.getElementById('cat-bebes');
    if (catHombres) catHombres.addEventListener('change', aplicarFiltroCategoria);
    if (catMujeres) catMujeres.addEventListener('change', aplicarFiltroCategoria);
    if (catNinos)   catNinos.addEventListener('change', aplicarFiltroCategoria);
    if (catNinas)   catNinas.addEventListener('change', aplicarFiltroCategoria);
    if (catBebes)   catBebes.addEventListener('change', aplicarFiltroCategoria);
    // filtros tallas
    const tallaXXS  = document.getElementById('talla-xxs');
    const tallaXS   = document.getElementById('talla-xs');
    const tallaS    = document.getElementById('talla-s');
    const tallaM    = document.getElementById('talla-m');
    const tallaL    = document.getElementById('talla-l');
    const tallaXL   = document.getElementById('talla-xl');
    const tallaXXL  = document.getElementById('talla-xxl');
    const tallaXXXL = document.getElementById('talla-xxxl');
    if (tallaXXS)  tallaXXS.addEventListener('change', aplicarFiltroTalla);
    if (tallaXS)   tallaXS.addEventListener('change', aplicarFiltroTalla);
    if (tallaS)    tallaS.addEventListener('change', aplicarFiltroTalla);
    if (tallaM)    tallaM.addEventListener('change', aplicarFiltroTalla);
    if (tallaL)    tallaL.addEventListener('change', aplicarFiltroTalla);
    if (tallaXL)   tallaXL.addEventListener('change', aplicarFiltroTalla);
    if (tallaXXL)  tallaXXL.addEventListener('change', aplicarFiltroTalla);
    if (tallaXXXL) tallaXXXL.addEventListener('change', aplicarFiltroTalla);
    // filtros colores
    const colorRojo     = document.getElementById('color-rojo');
    const colorNaranja  = document.getElementById('color-naranja');
    const colorAmarillo = document.getElementById('color-amarillo');
    const colorVerde    = document.getElementById('color-verde');
    const colorAzul     = document.getElementById('color-azul');
    const colorMorado   = document.getElementById('color-morado');
    const colorOtros    = document.getElementById('color-otros-colores');
    if (colorRojo)     colorRojo.addEventListener('change', aplicarFiltroColor);
    if (colorNaranja)  colorNaranja.addEventListener('change', aplicarFiltroColor);
    if (colorAmarillo) colorAmarillo.addEventListener('change', aplicarFiltroColor);
    if (colorVerde)    colorVerde.addEventListener('change', aplicarFiltroColor);
    if (colorAzul)     colorAzul.addEventListener('change', aplicarFiltroColor);
    if (colorMorado)   colorMorado.addEventListener('change', aplicarFiltroColor);
    if (colorOtros)    colorOtros.addEventListener('change', aplicarFiltroColor);
});
//---------------------------------//
//--|funcionalidad_boton_ver_mas|--//
//---------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-productos');
    const btnVerMas = document.getElementById('btn-ver-mas');
    let clickCount = 0;
    btnVerMas.addEventListener('click', () => {
        clickCount++;
        const pasos = document.querySelectorAll('.paso');
        pasos.forEach(p => p.classList.remove('activo'));
        if (clickCount - 1 < pasos.length) {
            pasos[clickCount - 1].classList.add('activo');
        }
        if (clickCount === 1) {
            const productosExtra1 = `
                <div class="producto_contenedor2">
                    <div class="producto9">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$137.900
                        </div>
                    </div>
                    <div class="producto10">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$56.190
                        </div>
                    </div>
                    <div class="producto11">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$51.000
                        </div>
                    </div>
                    <div class="producto12">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$135.000
                        </div>
                    </div>
                    <div class="producto13">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$44.990
                        </div>
                    </div>
                    <div class="producto14">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$42.000
                        </div>
                    </div>
                    <div class="producto15">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$40.000
                        </div>
                    </div>
                    <div class="producto16">
                        <div class="producto-header">
                            Masomy-h
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$39.999
                        </div>
                    </div>      
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra1);
        } else if (clickCount === 2) {
            const productosExtra2 = `
                <div class="producto_contenedor3">
                    <div class="producto17">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$37.900
                        </div>
                    </div>
                    <div class="producto18">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$123.000
                        </div>
                    </div>
                    <div class="producto19">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$35.100
                        </div>
                    </div>
                    <div class="producto20">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$30.000
                        </div>
                    </div>
                    <div class="producto21">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$27.180
                        </div>
                    </div>
                    <div class="producto22">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$24.000
                        </div>
                    </div>
                    <div class="producto23">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$20.000
                        </div>
                    </div>
                    <div class="producto24">
                        <div class="producto-header">
                            Masomy-s
                            <div>
                                <i class="fas fa-shopping-cart"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="producto-body">
                            <img src="imagenes/hombres1.jpg" alt="">
                        </div>
                        <div class="producto-footer">
                            | camisa casual | xs | azul |<br>$115.000
                        </div>
                    </div>   
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra2);
        } else {
            btnVerMas.textContent = "ver mas";
            btnVerMas.disabled = true;
            btnVerMas.style.backgroundColor = "#999";
            btnVerMas.style.cursor = "not-allowed";
        }
    });
});