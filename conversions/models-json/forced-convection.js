var models_library = models_library || {};
models_library.forced_convection = {
  "model": {
    "timestep": 0.5,
    "measurement_interval": 50,
    "viewupdate_interval": 10,
    "stoptime": 1440.0,
    "sun_angle": 1.5707964,
    "solar_power_density": 2000.0,
    "solar_ray_count": 24,
    "solar_ray_speed": 0.1,
    "photon_emission_interval": 20,
    "background_conductivity": 1.0,
    "background_viscosity": 1.0E-4,
    "thermal_buoyancy": 0.0,
    "buoyancy_approximation": 1,
    "boundary": {
      "flux_at_border": {
        "upper": 0.0,
        "lower": 0.0,
        "left": 0.0,
        "right": -2.0
      }
    },
    "structure": {
      "part": [
        {
          "rectangle": {
            "x": 0.0,
            "y": 0.0,
            "width": 0.2,
            "height": 5.0
          },
          "thermal_conductivity": 0.08,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "wind_speed": 0.025,
          "uid": "fan",
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x7f7f80,
            "texture_style": 10,
            "texture_width": 12,
            "texture_height": 12
          },
          "draggable": false
        },
        {
          "rectangle": {
            "x": 0.0,
            "y": 5.0,
            "width": 0.2,
            "height": 5.0
          },
          "thermal_conductivity": 0.08,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x7f7f80,
            "texture_style": 9,
            "texture_width": 12,
            "texture_height": 12
          },
          "draggable": false
        },
        {
          "rectangle": {
            "x": 0.1999999,
            "y": 4.9,
            "width": 9.6,
            "height": 0.2
          },
          "thermal_conductivity": 0.0,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x7f7f80,
            "texture_bg": -0x10000,
            "texture_style": 12,
            "texture_width": 12,
            "texture_height": 12
          },
          "draggable": false
        },
        {
          "ellipse": {
            "x": 2.5,
            "y": 7.5,
            "a": 1.0,
            "b": 1.0
          },
          "thermal_conductivity": 10.0,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 30.0,
          "constant_temperature": false,
          "filled": false
        },
        {
          "ellipse": {
            "x": 2.5,
            "y": 2.5,
            "a": 1.0,
            "b": 1.0
          },
          "thermal_conductivity": 10.0,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 30.0,
          "constant_temperature": false,
          "filled": false
        }
      ]
    }
  },
  "sensor": {
    "thermometer": [
      {
        "label": "T2",
        "x": 2.525,
        "y": 7.55
      },
      {
        "label": "T1",
        "x": 2.525,
        "y": 2.4500003
      }
    ]
  },
  "view": {
    "grid_size": 10,
    "rainbow_x": 0.0,
    "rainbow_y": 0.0,
    "rainbow_w": 0.49333334,
    "rainbow_h": 0.033333335,
    "minimum_temperature": 0.0,
    "maximum_temperature": 40.0,
    "graph_xlabel": "Time",
    "text": [
      {
        "string": "No fan",
        "name": "Arial",
        "size": 12,
        "style": 0,
        "color": 0xffffff,
        "x": 0.5,
        "y": 0.5
      },
      {
        "string": "Fan",
        "name": "Arial",
        "size": 12,
        "style": 0,
        "color": 0xffffff,
        "x": 0.5,
        "y": 5.75
      },
      {
        "string": "This model automatically stops at 0.4 hour.",
        "name": "Arial",
        "size": 14,
        "style": 0,
        "color": 0xffffff,
        "x": 2.0,
        "y": 0.5
      }
    ]
  }
};