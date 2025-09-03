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
//------------------------------------//
//--|generando_contenido_por_filtro|--//
//------------------------------------//
const contenedor = document.getElementById('contenedor-productos');
//---------------------------//
//--|contenido_ordenar_por|--//
//---------------------------//
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
                | pantalon | xxxl | rojo |<br>$200.000
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
                | pantalon | xxxl | azul |<br>$195.000
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
                | pantalon | xxl | naranja |<br>$180.000
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
                | pantalon | xxl | morado |<br>$175.000
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
                | pantalon | xl | amarillo |<br>$160.000
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
                | pantalon | xl | rojo |<br>$155.000
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
                | pantalon | xxxl | verde |<br>$150.000
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
                | pantalon | xxxl | morado |<br>$140.000
            </div>
        </div>
    </div>
    <div id="indicadores" class="indicadores">
        <span class="indicador activo"></span>
        <span class="indicador"></span>
        <span class="indicador"></span>
        <span class="indicador"></span>
    </div>
    <div id="contenedor-precios-altos"></div>
    <button id="verMasPreciosAltos">Ver más precios altos</button>
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
    </div>
    <div id="indicadores-bajos" class="indicadores">
        <span class="indicador activo"></span>
        <span class="indicador"></span>
        <span class="indicador"></span>
        <span class="indicador"></span>
    </div>
    <div id="contenedor-precios-bajos"></div>
    <button id="verMasPreciosBajos" class="verMasPreciosBajos">Ver más precios bajos</button>
`;
const productos_mas_vendidos = `
    <div class="categorias_mas_vendidos">
        <div class="producto_mas_vendido1">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_vendido2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_vendido3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_vendido4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_vendido5">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
    </div>
`;
const productos_mas_recientes = `
    <div class="categorias_mas_recientes">
        <div class="producto_mas_reciente1">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_mas_reciente8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | camisa casual |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
    </div>
`;
//--------------------------//
//--|contenido_categorias|--//
//--------------------------//
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
                | pantalon | xxxl | rojo |<br>$200.000
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
                | pantalon | xxl | naranja |<br>$180.000
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
                | pantalon | xl | amarillo |<br>$160.000
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
                | pantalon | l | verde |<br>$140.000
            </div>
        </div>
        <div class="producto_de_hombres_5">
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
                | pantalon | m | azul |<br>$120.000
            </div>
        </div>
        <div class="producto_de_hombres_6">
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
                | pantalon | s | morado |<br>$100.000
            </div>
        </div>
        <div class="producto_de_hombres_7">
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
                | pantalon | xs | rojo |<br>$80.000
            </div>
        </div>
        <div class="producto_de_hombres_8">
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
                | pantalon | xxs | verde |<br>$60.000
            </div>
        </div>
    </div>
`;
const productos_mujeres = `
    <div class="categorias_por_mujeres">
        <div class="producto_de_mujeres_1">
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
                | pantalon | xxxl | azul |<br>$195.000
            </div>
        </div>
        <div class="producto_de_mujeres_2">
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
                | pantalon | xxl | morado |<br>$175.000
            </div>
        </div>
        <div class="producto_de_mujeres_3">
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
                | pantalon | xl | rojo |<br>$155.000
            </div>
        </div>
        <div class="producto_de_mujeres_4">
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
                | pantalon | l | amarillo |<br>$135.000
            </div>
        </div>
        <div class="producto_de_mujeres_5">
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
                | pantalon | m | verde |<br>$115.000
            </div>
        </div>
        <div class="producto_de_mujeres_6">
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
                | pantalon | s | naranja |<br>$95.000
            </div>
        </div>
        <div class="producto_de_mujeres_7">
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
                | pantalon | xs | rojo |<br>$75.000
            </div>
        </div>
        <div class="producto_de_mujeres_8">
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
                | pantalon | xxs | azul |<br>$55.000
            </div>
        </div>
    </div>
`;
const productos_ninos = `
    <div class="categorias_por_niños">
        <div class="producto_de_niños_1">
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
                | pantalon | xxxl | verde |<br>$150.000
            </div>
        </div>
        <div class="producto_de_niños_2">
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
                | pantalon | xxl | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_de_niños_3">
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
                | pantalon | xl | rojo |<br>$120.000
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
                | pantalon | l | naranja |<br>$105.000
            </div>
        </div>
        <div class="producto_de_niños_5">
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
                | pantalon | m | morado |<br>$90.000
            </div>
        </div>
        <div class="producto_de_niños_6">
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
                | pantalon | s | amarillo |<br>$75.000
            </div>
        </div>
        <div class="producto_de_niños_7">
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
                | pantalon | xs | rojo |<br>$60.000
            </div>
        </div>
        <div class="producto_de_niños_8">
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
                | pantalon | xxs | azul |<br>$45.000
            </div>
        </div>
    </div>
`;
const productos_ninas = `
    <div class="categorias_por_niñas">
        <div class="producto_de_niñas_1">
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
                | pantalon | xxxl | morado |<br>$140.000
            </div>
        </div>
        <div class="producto_de_niñas_2">
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
                | pantalon | xxl | rojo |<br>$125.000
            </div>
        </div>
        <div class="producto_de_niñas_3">
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
                | pantalon | xl | amarillo |<br>$110.000
            </div>
        </div>
        <div class="producto_de_niñas_4">
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
                | pantalon | l | verde |<br>$95.000
            </div>
        </div>
        <div class="producto_de_niñas_5">
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
                | pantalon | m | azul |<br>$80.000
            </div>
        </div>
        <div class="producto_de_niñas_6">
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
                | pantalon | s | naranja |<br>$65.000
            </div>
        </div>
        <div class="producto_de_niñas_7">
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
                | pantalon | xs | rojo |<br>$50.000
            </div>
        </div>
        <div class="producto_de_niñas_8">
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
                | pantalon | xxs | amarillo |<br>$35.000
            </div>
        </div>
    </div>
`;
const productos_bebes = `
    <div class="categorias_por_bebes">
        <div class="producto_de_niñas_1">
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
                | pantalon | xxxl | azul |<br>$100.000
            </div>
        </div>
        <div class="producto_de_bebes_2">
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
                | pantalon | xxl | verde |<br>$90.000
            </div>
        </div>
        <div class="producto_de_bebes_3">
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
                | pantalon | xl | naranja |<br>$80.000
            </div>
        </div>
        <div class="producto_de_bebes_4">
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
                | pantalon | l | rojo |<br>$70.000
            </div>
        </div>
        <div class="producto_de_bebes_5">
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
                | pantalon | m | amarillo |<br>$60.000
            </div>
        </div>
        <div class="producto_de_bebes_6">
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
                | pantalon | s | morado |<br>$50.000
            </div>
        </div>
        <div class="producto_de_bebes_7">
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
                | pantalon | xs | verde |<br>$40.000
            </div>
        </div>
        <div class="producto_de_bebes_8">
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
                | pantalon | xxs | azul |<br>$30.000
            </div>
        </div>
    </div>
`;
//----------------------//
//--|contenido_tallas|--//
//----------------------//
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxs_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxs_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xs_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_s_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_m_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_l_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xl_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxl_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_talla_xxxl_8">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
    </div>
`;
//---------------------//
//--|contenido_color|--//
//---------------------//
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_rojo_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_naranja_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_amarillo_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_verde_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_azul_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_color_morado_8">
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
                | pantalon |  |  |<br>$
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_2">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_3">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_4">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_5">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_6">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_7">
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
                | pantalon |  |  |<br>$
            </div>
        </div>
        <div class="producto_otros_colores_8">
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
                | pantalon |  |  |<br>$
            </div>
        </div>                    
    </div>
`;
//----------------------------------------------//
//--|mostrar_y_ocultar_indicadores_y_el_boton|--//
//----------------------------------------------//
const btnVerMas = document.getElementById('btn-ver-mas');
const indicadores = document.getElementById('indicadores');
function ocultarVerMas() {
    if (btnVerMas) btnVerMas.style.display = 'none';
    if (indicadores) indicadores.style.display = 'none';
}
function mostrarVerMas() {
    if (btnVerMas) btnVerMas.style.display = 'block';
    if (indicadores) indicadores.style.display = 'flex';
}
//------------------------------------------------//
//--|bloques_de_precios_altos_uno_por_categoria|--//
//------------------------------------------------//
const bloquesPreciosAltos = [
    `
    <div class="categorias_de_precios_altos2">
        <div class="producto_precio_alto9">
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
                | pantalon | l | verde |<br>$140.000
            </div>
        </div>
        <div class="producto_precio_alto10">
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
                | pantalon | l | amarillo |<br>$135.000
            </div>
        </div>
        <div class="producto_precio_alto11">
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
                | pantalon | xxl | azul |<br>$135.000
            </div>
        </div>
        <div class="producto_precio_alto12">
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
                | pantalon | xxl | rojo |<br>$125.000
            </div>
        </div>
        <div class="producto_precio_alto13">
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
                | pantalon | xl | rojo |<br>$120.000
            </div>
        </div>
        <div class="producto_precio_alto14">
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
                | pantalon | m | azul |<br>$120.000
            </div>
        </div>
        <div class="producto_precio_alto15">
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
                | pantalon | m | verde |<br>$115.000
            </div>
        </div>
        <div class="producto_precio_alto16">
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
                | pantalon | xl | amarillo |<br>$110.000
            </div>
        </div>
    </div>
    `,
    `
    <div class="categorias_de_precios_altos3">
        <div class="producto_precio_alto17">
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
                | pantalon | xxxl | azul |<br>$100.000
            </div>
        </div>
        <div class="producto_precio_alto18">
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
                | pantalon | s | morado |<br>$100.000
            </div>
        </div>
        <div class="producto_precio_alto19">
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
                | pantalon | l | naranja |<br>$105.000
            </div>
        </div>
        <div class="producto_precio_alto20">
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
                | pantalon | l | verde |<br>$95.000
            </div>
        </div>
        <div class="producto_precio_alto21">
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
                | pantalon | s | naranja |<br>$95.000
            </div>
        </div>
        <div class="producto_precio_alto22">
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
                | pantalon | xxl | verde |<br>$90.000
            </div>
        </div>
        <div class="producto_precio_alto23">
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
                | pantalon | m | morado |<br>$90.000
            </div>
        </div>
        <div class="producto_precio_alto24">
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
                | pantalon | xl | naranja |<br>$80.000
            </div>
        </div>
    </div>
    `,
    `
    <div class="categorias_de_precios_altos4">
        <div class="producto_precio_alto25">
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
                | pantalon | m | azul |<br>$80.000
            </div>
        </div>
        <div class="producto_precio_alto26">
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
                | pantalon | xs | rojo |<br>$80.000
            </div>
        </div>
        <div class="producto_precio_alto27">
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
                | pantalon | s | amarillo |<br>$75.000
            </div>
        </div>
        <div class="producto_precio_alto28">
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
                | pantalon | xs | rojo |<br>$75.000
            </div>
        </div>
        <div class="producto_precio_alto29">
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
                | pantalon | l | rojo |<br>$70.000
            </div>
        </div>
        <div class="producto_precio_alto30">
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
                | pantalon | s | naranja |<br>$65.000
            </div>
        </div>
        <div class="producto_precio_alto31">
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
                | pantalon | m | amarillo |<br>$60.000
            </div>
        </div>
        <div class="producto_precio_alto32">
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
                | pantalon | xs | rojo |<br>$60.000
            </div>
        </div>
    </div>
    `,
    `
    <div class="categorias_de_precios_altos5">
        <div class="producto_precio_alto33">
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
                | pantalon | xxs | verde |<br>$60.000
            </div>
        </div>
        <div class="producto_precio_alto34">
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
                | pantalon | xxs | azul |<br>$55.000
            </div>
        </div>
        <div class="producto_precio_alto35">
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
                | pantalon | xs | rojo |<br>$50.000
            </div>
        </div>
        <div class="producto_precio_alto36">
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
                | pantalon | s | morado |<br>$50.000
            </div>
        </div>
        <div class="producto_precio_alto37">
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
                | pantalon | xxs | azul |<br>$45.000
            </div>
        </div>
        <div class="producto_precio_alto38">
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
                | pantalon | xs | verde |<br>$40.000
            </div>
        </div>
        <div class="producto_precio_alto39">
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
                | pantalon | xxs | amarillo |<br>$35.000
            </div>
        </div>
        <div class="producto_precio_alto40">
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
                | pantalon | xxs | azul |<br>$30.000
            </div>
        </div>
    </div>
    `
];
//------------------------------------------------//
//--|bloques_de_precios_bajos_uno_por_categoria|--//
//------------------------------------------------//
const bloquesPreciosBajos = [
    `<div class="producto">Pantalón Hombre Económico - $20</div>`,
    `<div class="producto">Pantalón Mujer Económico - $25</div>`,
    `<div class="producto">Pantalón Niño Económico - $15</div>`,
    `<div class="producto">Pantalón Bebé Económico - $10</div>`
];
//------------------------//
//--|indices_de_control|--//
//------------------------//
let indiceBloque = -1; 
let indiceBloqueBajo = -1; 
//---------------------------------//
//--|Funcion_filtrar_ordenar_por|--//
//---------------------------------//
function aplicarFiltroOrdenPrecio() {
    const precioAltoEl = document.getElementById('orden-precio-alto');
    const precioBajoEl = document.getElementById('orden-precio-bajo');
    const masVendidosEl = document.querySelector('input[value="mas_vendidos"]');
    const masRecientesEl = document.querySelector('input[value="mas_recientes"]');
    const descuentosEl = document.querySelector('input[value="descuentos"]');
    const precioAlto = !!(precioAltoEl && precioAltoEl.checked);
    const precioBajo = !!(precioBajoEl && precioBajoEl.checked);
    const masVendidos = !!(masVendidosEl && masVendidosEl.checked);
    const masRecientes = !!(masRecientesEl && masRecientesEl.checked);
    const descuentos = !!(descuentosEl && descuentosEl.checked);
    if (precioAlto) {
        contenedor.innerHTML = productos_con_precios_altos;
        const botonVerMas = document.getElementById("verMasPreciosAltos");
        const contenedorAltos = document.getElementById("contenedor-precios-altos");
        if (botonVerMas) {
            botonVerMas.addEventListener("click", () => {
                indiceBloque++;
                if (indiceBloque >= bloquesPreciosAltos.length) {
                    indiceBloque = 0;
                }
                contenedorAltos.innerHTML = bloquesPreciosAltos[indiceBloque];
                actualizarIndicadores("indicadores", indiceBloque);
            });
        }
        ocultarVerMas();
    } else if (precioBajo) {
        contenedor.innerHTML = productos_con_precios_bajos;
        const botonVerMasBajo = document.getElementById("verMasPreciosBajos");
        const contenedorBajos = document.getElementById("contenedor-precios-bajos");
        if (botonVerMasBajo) {
            botonVerMasBajo.addEventListener("click", () => {
                indiceBloqueBajo++;
                if (indiceBloqueBajo >= bloquesPreciosBajos.length) {
                    indiceBloqueBajo = 0;
                }
                contenedorBajos.innerHTML = bloquesPreciosBajos[indiceBloqueBajo];
                actualizarIndicadores("indicadores-bajos", indiceBloqueBajo);
            });
        }
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
//-------------------------//
//--|ActualizarIndicadores|--//
//-------------------------//
function actualizarIndicadores(idContenedor, indiceActivo) {
    const cont = document.getElementById(idContenedor);
    if (cont) {
        const spans = cont.querySelectorAll(".indicador");
        spans.forEach((span, idx) => {
            span.classList.toggle("activo", idx === indiceActivo);
        });
    }
}
//--------------------------------//
//--|Funcion_filtrar_categorias|--//
//--------------------------------//
function aplicarFiltroCategoria() {
    const catHombres = document.getElementById('cat-hombres');
    const catMujeres = document.getElementById('cat-mujeres');
    const catNinos = document.getElementById('cat-ninos');
    const catNinas = document.getElementById('cat-ninas');
    const catBebes = document.getElementById('cat-bebes');
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
//----------------------------//
//--|Funcion_filtrar_tallas|--//
//----------------------------//
function aplicarFiltroTalla() {
    const tallaXXS = document.getElementById('talla-xxs');
    const tallaXS = document.getElementById('talla-xs');
    const tallaS = document.getElementById('talla-s');
    const tallaM = document.getElementById('talla-m');
    const tallaL = document.getElementById('talla-l');
    const tallaXL = document.getElementById('talla-xl');
    const tallaXXL = document.getElementById('talla-xxl');
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
//---------------------------//
//--|Funcion_filtrar_color|--//
//---------------------------//
function aplicarFiltroColor() {
    const colorRojo = document.getElementById('color-rojo');
    const colorNaranja = document.getElementById('color-naranja');
    const colorAmarillo = document.getElementById('color-amarillo');
    const colorVerde = document.getElementById('color-verde');
    const colorAzul = document.getElementById('color-azul');
    const colorMorado = document.getElementById('color-morado');
    const colorOtros = document.getElementById('color-otros-colores');
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
//--|asignacion_de_eventos|----//
//-----------------------------//
document.addEventListener('DOMContentLoaded', () => {
    //---------------------------//
    //--|filtro_de_ordenar_por|--//
    //---------------------------//
    const precioAltoEl = document.getElementById('orden-precio-alto');
    const precioBajoEl = document.getElementById('orden-precio-bajo');
    const masVendidosEl = document.querySelector('input[value="mas_vendidos"]');
    const masRecientesEl = document.querySelector('input[value="mas_recientes"]');
    const descuentosEl = document.querySelector('input[value="descuentos"]');
    if (precioAltoEl) precioAltoEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (precioBajoEl) precioBajoEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (masVendidosEl) masVendidosEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (masRecientesEl) masRecientesEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    if (descuentosEl) descuentosEl.addEventListener('change', aplicarFiltroOrdenPrecio);
    //--------------------------//
    //--|filtro_de_categorias|--//
    //--------------------------//
    const catHombres = document.getElementById('cat-hombres');
    const catMujeres = document.getElementById('cat-mujeres');
    const catNinos = document.getElementById('cat-ninos');
    const catNinas = document.getElementById('cat-ninas');
    const catBebes = document.getElementById('cat-bebes');
    if (catHombres) catHombres.addEventListener('change', aplicarFiltroCategoria);
    if (catMujeres) catMujeres.addEventListener('change', aplicarFiltroCategoria);
    if (catNinos) catNinos.addEventListener('change', aplicarFiltroCategoria);
    if (catNinas) catNinas.addEventListener('change', aplicarFiltroCategoria);
    if (catBebes) catBebes.addEventListener('change', aplicarFiltroCategoria);
    //----------------------//
    //--|filtro_de_tallas|--//
    //----------------------//
    const tallaXXS = document.getElementById('talla-xxs');
    const tallaXS = document.getElementById('talla-xs');
    const tallaS = document.getElementById('talla-s');
    const tallaM = document.getElementById('talla-m');
    const tallaL = document.getElementById('talla-l');
    const tallaXL = document.getElementById('talla-xl');
    const tallaXXL = document.getElementById('talla-xxl');
    const tallaXXXL = document.getElementById('talla-xxxl');
    if (tallaXXS) tallaXXS.addEventListener('change', aplicarFiltroTalla);
    if (tallaXS) tallaXS.addEventListener('change', aplicarFiltroTalla);
    if (tallaS) tallaS.addEventListener('change', aplicarFiltroTalla);
    if (tallaM) tallaM.addEventListener('change', aplicarFiltroTalla);
    if (tallaL) tallaL.addEventListener('change', aplicarFiltroTalla);
    if (tallaXL) tallaXL.addEventListener('change', aplicarFiltroTalla);
    if (tallaXXL) tallaXXL.addEventListener('change', aplicarFiltroTalla);
    if (tallaXXXL) tallaXXXL.addEventListener('change', aplicarFiltroTalla);
    //-----------------------//
    //--|filtro_de_colores|--//
    //-----------------------//
    const colorRojo = document.getElementById('color-rojo');
    const colorNaranja = document.getElementById('color-naranja');
    const colorAmarillo = document.getElementById('color-amarillo');
    const colorVerde = document.getElementById('color-verde');
    const colorAzul = document.getElementById('color-azul');
    const colorMorado = document.getElementById('color-morado');
    const colorOtros = document.getElementById('color-otros-colores');
    if (colorRojo) colorRojo.addEventListener('change', aplicarFiltroColor);
    if (colorNaranja) colorNaranja.addEventListener('change', aplicarFiltroColor);
    if (colorAmarillo) colorAmarillo.addEventListener('change', aplicarFiltroColor);
    if (colorVerde) colorVerde.addEventListener('change', aplicarFiltroColor);
    if (colorAzul) colorAzul.addEventListener('change', aplicarFiltroColor);
    if (colorMorado) colorMorado.addEventListener('change', aplicarFiltroColor);
    if (colorOtros) colorOtros.addEventListener('change', aplicarFiltroColor);
    //--------------------------------------//
    //--|evento_del_boton_ver_mas_precios|--//
    //--------------------------------------//
    if (btnVerMas) {
        btnVerMas.addEventListener('click', () => {
            contenedor.innerHTML = productos_con_precios_altos;
            ocultarVerMas();
        });
    }
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto10">
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
                            | camisa casual |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto11">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto12">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto13">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto14">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto15">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto16">
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
                            | pantalon |  |  |<br>$
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto18">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto19">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto20">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto21">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto22">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto23">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>
                    <div class="producto24">
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
                            | pantalon |  |  |<br>$
                        </div>
                    </div>   
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra2);
        } else if (clickCount === 3) {
            const productosExtra3 = `
                <div class="producto">Contenido Extra 3</div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra3);
        } else if (clickCount === 4) {
            const productosExtra4 = `
                <div class="producto">Contenido Extra 4</div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra4);
        } else if (clickCount === 5) {
            const productosExtra5 = `
                <div class="producto">Contenido Extra 5</div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productosExtra5);
            // desactivar el botón
            btnVerMas.textContent = "ver mas";
            btnVerMas.disabled = true;
            btnVerMas.style.backgroundColor = "#999";
            btnVerMas.style.cursor = "not-allowed";
        }
    });
});