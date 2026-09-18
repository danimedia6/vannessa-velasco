import osmnx as ox
import matplotlib.pyplot as plt

# Usar otro servidor Overpass
ox.settings.overpass_endpoint = "https://overpass.kumi.systems/api/interpreter"
ox.settings.timeout = 300

# Área urbana aproximada de Bogotá
north = 4.84
south = 4.46
east = -73.98
west = -74.22

print("Descargando red vial urbana de Bogotá...")
print("Servidor Overpass: Kumi Systems")

G = ox.graph_from_bbox(
    north=north,
    south=south,
    east=east,
    west=west,
    network_type="drive",
    simplify=True,
    retain_all=False,
)

print(f"Nodos: {len(G.nodes):,}")
print(f"Segmentos: {len(G.edges):,}")

print("Generando plano...")

fig, ax = ox.plot_graph(
    G,
    figsize=(12, 16),
    bgcolor="#f3f0e8",
    node_size=0,
    edge_color="#252525",
    edge_linewidth=0.35,
    show=False,
    close=False,
)

ax.set_axis_off()

print("Exportando SVG...")

fig.savefig(
    "bogota-urbano.svg",
    format="svg",
    bbox_inches="tight",
    pad_inches=0,
)

plt.close(fig)

print("LISTO: bogota-urbano.svg")