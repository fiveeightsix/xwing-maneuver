(function() {
  var exportObj,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

  exportObj.unreleasedExpansions = ["Ghost Expansion Pack", "Inquisitor's TIE Expansion Pack", "Mist Hunter Expansion Pack", "Punishing One Expansion Pack"];

  exportObj.isReleased = function(data) {
    var j, len, ref, source;
    ref = data.sources;
    for (j = 0, len = ref.length; j < len; j++) {
      source = ref[j];
      if (indexOf.call(exportObj.unreleasedExpansions, source) < 0) {
        return true;
      }
    }
    return false;
  };

  String.prototype.canonicalize = function() {
    return this.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s+/g, '-');
  };

  exportObj.hugeOnly = function(ship) {
    var ref;
    return (ref = ship.data.huge) != null ? ref : false;
  };

  exportObj.basicCardData = function() {
    return {
      ships: {
        "X-Wing": {
          name: "X-Wing",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 2,
          hull: 3,
          shields: 2,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 3]]
        },
        "Y-Wing": {
          name: "Y-Wing",
          factions: ["Rebel Alliance", "Scum and Villainy"],
          attack: 2,
          agility: 1,
          hull: 5,
          shields: 3,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 1, 2, 1, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 3, 0, 0, 3]]
        },
        "A-Wing": {
          name: "A-Wing",
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 3,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Target Lock", "Boost", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [2, 2, 2, 2, 2, 0], [1, 1, 2, 1, 1, 3], [0, 0, 2, 0, 0, 0], [0, 0, 2, 0, 0, 3]]
        },
        "YT-1300": {
          name: "YT-1300",
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 1,
          hull: 6,
          shields: 4,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [0, 1, 1, 1, 0, 3], [0, 0, 1, 0, 0, 3]],
          large: true
        },
        "TIE Fighter": {
          name: "TIE Fighter",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 3,
          hull: 3,
          shields: 0,
          actions: ["Focus", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        "TIE Advanced": {
          name: "TIE Advanced",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 3,
          hull: 3,
          shields: 2,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 0, 2, 0, 0], [1, 1, 2, 1, 1, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        "TIE Interceptor": {
          name: "TIE Interceptor",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 3,
          hull: 3,
          shields: 0,
          actions: ["Focus", "Barrel Roll", "Boost", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [2, 2, 2, 2, 2, 0], [1, 1, 2, 1, 1, 3], [0, 0, 2, 0, 0, 0], [0, 0, 1, 0, 0, 3]]
        },
        "Firespray-31": {
          name: "Firespray-31",
          factions: ["Galactic Empire", "Scum and Villainy"],
          attack: 3,
          agility: 2,
          hull: 6,
          shields: 4,
          actions: ["Focus", "Target Lock", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 3], [0, 0, 1, 0, 0, 3]],
          large: true
        },
        "HWK-290": {
          name: "HWK-290",
          factions: ["Rebel Alliance", "Scum and Villainy"],
          attack: 1,
          agility: 2,
          hull: 4,
          shields: 1,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0], [0, 2, 2, 2, 0], [1, 1, 2, 1, 1], [0, 3, 1, 3, 0], [0, 0, 3, 0, 0]]
        },
        "Lambda-Class Shuttle": {
          name: "Lambda-Class Shuttle",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 1,
          hull: 5,
          shields: 5,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 3, 0, 0], [0, 2, 2, 2, 0], [3, 1, 2, 1, 3], [0, 3, 1, 3, 0]],
          large: true
        },
        "B-Wing": {
          name: "B-Wing",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 1,
          hull: 3,
          shields: 5,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 3], [0, 3, 1, 3, 0, 0], [0, 0, 3, 0, 0, 0]]
        },
        "TIE Bomber": {
          name: "TIE Bomber",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 2,
          hull: 6,
          shields: 0,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
        },
        "GR-75 Medium Transport": {
          name: "GR-75 Medium Transport",
          factions: ["Rebel Alliance"],
          energy: 4,
          agility: 0,
          hull: 8,
          shields: 4,
          actions: ["Recover", "Reinforce", "Coordinate", "Jam"],
          huge: true,
          epic_points: 2,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]]
        },
        "Z-95 Headhunter": {
          name: "Z-95 Headhunter",
          factions: ["Rebel Alliance", "Scum and Villainy"],
          attack: 2,
          agility: 2,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 1, 1, 1, 3], [0, 0, 1, 0, 0, 0]]
        },
        "TIE Defender": {
          name: "TIE Defender",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 3,
          hull: 3,
          shields: 3,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 0, 1, 3, 0], [3, 1, 2, 1, 3, 0], [1, 1, 2, 1, 1, 0], [0, 0, 2, 0, 0, 1], [0, 0, 2, 0, 0, 0]]
        },
        "E-Wing": {
          name: "E-Wing",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 3,
          hull: 2,
          shields: 3,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        "TIE Phantom": {
          name: "TIE Phantom",
          factions: ["Galactic Empire"],
          attack: 4,
          agility: 2,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Barrel Roll", "Evade", "Cloak"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 3], [0, 0, 1, 0, 0, 3]]
        },
        "CR90 Corvette (Fore)": {
          name: "CR90 Corvette (Fore)",
          factions: ["Rebel Alliance"],
          attack: 4,
          agility: 0,
          hull: 8,
          shields: 5,
          actions: ["Coordinate", "Target Lock"],
          huge: true,
          epic_points: 1.5,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]],
          multisection: ["CR90 Corvette (Aft)".canonicalize()],
          canonical_name: "CR90 Corvette".canonicalize()
        },
        "CR90 Corvette (Aft)": {
          name: "CR90 Corvette (Aft)",
          factions: ["Rebel Alliance"],
          energy: 5,
          agility: 0,
          hull: 8,
          shields: 3,
          actions: ["Reinforce", "Recover"],
          huge: true,
          epic_points: 1.5,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]],
          multisection: ["CR90 Corvette (Fore)".canonicalize()],
          canonical_name: "CR90 Corvette".canonicalize()
        },
        "YT-2400": {
          name: "YT-2400",
          canonical_name: "YT-2400 Freighter".canonicalize(),
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 2,
          hull: 5,
          shields: 5,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          large: true,
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 3]]
        },
        "VT-49 Decimator": {
          name: "VT-49 Decimator",
          factions: ["Galactic Empire"],
          attack: 3,
          agility: 0,
          hull: 12,
          shields: 4,
          actions: ["Focus", "Target Lock"],
          large: true,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [1, 2, 2, 2, 1, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 0]]
        },
        "StarViper": {
          name: "StarViper",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 3,
          hull: 4,
          shields: 1,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Boost"],
          maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0], [0, 1, 2, 1, 0, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0]]
        },
        "M3-A Interceptor": {
          name: "M3-A Interceptor",
          factions: ["Scum and Villainy"],
          attack: 2,
          agility: 3,
          hull: 2,
          shields: 1,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 0, 2, 1, 0], [1, 2, 2, 2, 1, 0], [0, 1, 2, 1, 0, 3], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
        },
        "Aggressor": {
          name: "Aggressor",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 3,
          hull: 4,
          shields: 4,
          actions: ["Focus", "Target Lock", "Boost", "Evade"],
          large: true,
          maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [1, 2, 2, 2, 1, 0, 0, 0], [0, 2, 2, 2, 0, 0, 3, 3], [0, 0, 0, 0, 0, 3, 0, 0]]
        },
        "Raider-class Corvette (Fore)": {
          name: "Raider-class Corvette (Fore)",
          factions: ["Galactic Empire"],
          attack: 4,
          agility: 0,
          hull: 8,
          shields: 6,
          actions: ["Recover", "Reinforce"],
          huge: true,
          epic_points: 1.5,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]]
        },
        "Raider-class Corvette (Aft)": {
          name: "Raider-class Corvette (Aft)",
          factions: ["Galactic Empire"],
          energy: 6,
          agility: 0,
          hull: 8,
          shields: 4,
          actions: ["Coordinate", "Target Lock"],
          huge: true,
          epic_points: 1.5,
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0]]
        },
        "YV-666": {
          name: "YV-666",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 1,
          hull: 6,
          shields: 6,
          large: true,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 3, 0, 0, 0], [0, 2, 2, 2, 0, 0], [3, 1, 2, 1, 3, 0], [1, 1, 2, 1, 1, 0], [0, 0, 1, 0, 0, 0]]
        },
        "Kihraxz Fighter": {
          name: "Kihraxz Fighter",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 2,
          hull: 4,
          shields: 1,
          actions: ["Focus", "Target Lock"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [1, 2, 0, 2, 1, 0], [1, 2, 2, 2, 1, 0], [0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 3], [0, 0, 0, 0, 0, 3]]
        },
        "K-Wing": {
          name: "K-Wing",
          factions: ["Rebel Alliance"],
          attack: 2,
          agility: 1,
          hull: 5,
          shields: 4,
          actions: ["Focus", "Target Lock", "SLAM"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [1, 1, 2, 1, 1, 0], [0, 1, 1, 1, 0, 0]]
        },
        "TIE Punisher": {
          name: "TIE Punisher",
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 1,
          hull: 6,
          shields: 3,
          actions: ["Focus", "Target Lock", "Boost"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [3, 1, 2, 1, 3, 0], [1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 3]]
        },
        "Gozanti-class Cruiser": {
          name: "Gozanti-class Cruiser",
          factions: ["Galactic Empire"],
          energy: 4,
          agility: 0,
          hull: 9,
          shields: 5,
          huge: true,
          epic_points: 2,
          actions: ["Recover", "Reinforce", "Coordinate", "Target Lock"]
        },
        "VCX-100": {
          name: "VCX-100",
          factions: ["Rebel Alliance"],
          attack: 4,
          agility: 0,
          hull: 10,
          shields: 6,
          large: true,
          actions: ["Focus", "Target Lock", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 2, 1, 3, 0], [1, 2, 2, 2, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
        },
        "Attack Shuttle": {
          name: "Attack Shuttle",
          factions: ["Rebel Alliance"],
          attack: 3,
          agility: 2,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0], [1, 1, 2, 1, 1, 0], [3, 1, 1, 1, 3, 0], [0, 0, 1, 0, 0, 3]]
        },
        "TIE Advanced Prototype": {
          name: "TIE Advanced Prototype",
          canonical_name: 'TIE Adv. Prototype'.canonicalize(),
          factions: ["Galactic Empire"],
          attack: 2,
          agility: 3,
          hull: 2,
          shields: 2,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Boost"],
          maneuvers: [[0, 0, 0, 0, 0, 0], [2, 2, 0, 2, 2, 0], [1, 1, 2, 1, 1, 0], [1, 1, 2, 1, 1, 0], [0, 0, 2, 0, 0, 3], [0, 0, 1, 0, 0, 0]]
        },
        "G-1A Starfighter": {
          name: "G-1A Starfighter",
          factions: ["Scum and Villainy"],
          attack: 3,
          agility: 1,
          hull: 4,
          shields: 4,
          actions: ["Focus", "Target Lock", "Evade"],
          maneuvers: []
        },
        "JumpMaster 5000": {
          name: "JumpMaster 5000",
          factions: ["Scum and Villainy"],
          large: true,
          attack: 2,
          agility: 2,
          hull: 5,
          shields: 4,
          actions: ["Focus", "Target Lock", "Barrel Roll"],
          maneuvers: []
        },
        "T-70 X-Wing": {
          name: "T-70 X-Wing",
          factions: ["Resistance"],
          attack: 3,
          agility: 2,
          hull: 3,
          shields: 3,
          actions: ["Focus", "Target Lock", "Boost"],
          maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 0, 0], [1, 1, 2, 1, 1, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]]
        },
        "TIE/fo Fighter": {
          name: "TIE/fo Fighter",
          factions: ["First Order"],
          attack: 2,
          agility: 3,
          hull: 3,
          shields: 1,
          actions: ["Focus", "Target Lock", "Barrel Roll", "Evade"],
          maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0, 0], [2, 2, 2, 2, 2, 0, 3, 3], [1, 1, 2, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0]]
        }
      },
      pilotsById: [
        {
          name: "Wedge Antilles",
          faction: "Rebel Alliance",
          id: 0,
          unique: true,
          ship: "X-Wing",
          skill: 9,
          points: 29,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: "Garven Dreis",
          faction: "Rebel Alliance",
          id: 1,
          unique: true,
          ship: "X-Wing",
          skill: 6,
          points: 26,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Red Squadron Pilot",
          faction: "Rebel Alliance",
          id: 2,
          ship: "X-Wing",
          skill: 4,
          points: 23,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Rookie Pilot",
          faction: "Rebel Alliance",
          id: 3,
          ship: "X-Wing",
          skill: 2,
          points: 21,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Biggs Darklighter",
          faction: "Rebel Alliance",
          id: 4,
          unique: true,
          ship: "X-Wing",
          skill: 5,
          points: 25,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Luke Skywalker",
          faction: "Rebel Alliance",
          id: 5,
          unique: true,
          ship: "X-Wing",
          skill: 8,
          points: 28,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: "Gray Squadron Pilot",
          faction: "Rebel Alliance",
          id: 6,
          ship: "Y-Wing",
          skill: 4,
          points: 20,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: '"Dutch" Vander',
          faction: "Rebel Alliance",
          id: 7,
          unique: true,
          ship: "Y-Wing",
          skill: 6,
          points: 23,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: "Horton Salm",
          faction: "Rebel Alliance",
          id: 8,
          unique: true,
          ship: "Y-Wing",
          skill: 8,
          points: 25,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: "Gold Squadron Pilot",
          faction: "Rebel Alliance",
          id: 9,
          ship: "Y-Wing",
          skill: 2,
          points: 18,
          slots: ["Turret", "Torpedo", "Torpedo", "Astromech"]
        }, {
          name: "Academy Pilot",
          faction: "Galactic Empire",
          id: 10,
          ship: "TIE Fighter",
          skill: 1,
          points: 12,
          slots: []
        }, {
          name: "Obsidian Squadron Pilot",
          faction: "Galactic Empire",
          id: 11,
          ship: "TIE Fighter",
          skill: 3,
          points: 13,
          slots: []
        }, {
          name: "Black Squadron Pilot",
          faction: "Galactic Empire",
          id: 12,
          ship: "TIE Fighter",
          skill: 4,
          points: 14,
          slots: ["Elite"]
        }, {
          name: '"Winged Gundark"',
          faction: "Galactic Empire",
          id: 13,
          unique: true,
          ship: "TIE Fighter",
          skill: 5,
          points: 15,
          slots: []
        }, {
          name: '"Night Beast"',
          faction: "Galactic Empire",
          id: 14,
          unique: true,
          ship: "TIE Fighter",
          skill: 5,
          points: 15,
          slots: []
        }, {
          name: '"Backstabber"',
          faction: "Galactic Empire",
          id: 15,
          unique: true,
          ship: "TIE Fighter",
          skill: 6,
          points: 16,
          slots: []
        }, {
          name: '"Dark Curse"',
          faction: "Galactic Empire",
          id: 16,
          unique: true,
          ship: "TIE Fighter",
          skill: 6,
          points: 16,
          slots: []
        }, {
          name: '"Mauler Mithel"',
          faction: "Galactic Empire",
          id: 17,
          unique: true,
          ship: "TIE Fighter",
          skill: 7,
          points: 17,
          slots: ["Elite"]
        }, {
          name: '"Howlrunner"',
          faction: "Galactic Empire",
          id: 18,
          unique: true,
          ship: "TIE Fighter",
          skill: 8,
          points: 18,
          slots: ["Elite"]
        }, {
          name: "Maarek Stele",
          faction: "Galactic Empire",
          id: 19,
          unique: true,
          ship: "TIE Advanced",
          skill: 7,
          points: 27,
          slots: ["Elite", "Missile"]
        }, {
          name: "Tempest Squadron Pilot",
          faction: "Galactic Empire",
          id: 20,
          ship: "TIE Advanced",
          skill: 2,
          points: 21,
          slots: ["Missile"]
        }, {
          name: "Storm Squadron Pilot",
          faction: "Galactic Empire",
          id: 21,
          ship: "TIE Advanced",
          skill: 4,
          points: 23,
          slots: ["Missile"]
        }, {
          name: "Darth Vader",
          faction: "Galactic Empire",
          id: 22,
          unique: true,
          ship: "TIE Advanced",
          skill: 9,
          points: 29,
          slots: ["Elite", "Missile"]
        }, {
          name: "Alpha Squadron Pilot",
          faction: "Galactic Empire",
          id: 23,
          ship: "TIE Interceptor",
          skill: 1,
          points: 18,
          slots: []
        }, {
          name: "Avenger Squadron Pilot",
          faction: "Galactic Empire",
          id: 24,
          ship: "TIE Interceptor",
          skill: 3,
          points: 20,
          slots: []
        }, {
          name: "Saber Squadron Pilot",
          faction: "Galactic Empire",
          id: 25,
          ship: "TIE Interceptor",
          skill: 4,
          points: 21,
          slots: ["Elite"]
        }, {
          name: "\"Fel's Wrath\"",
          faction: "Galactic Empire",
          id: 26,
          unique: true,
          ship: "TIE Interceptor",
          skill: 5,
          points: 23,
          slots: []
        }, {
          name: "Turr Phennir",
          faction: "Galactic Empire",
          id: 27,
          unique: true,
          ship: "TIE Interceptor",
          skill: 7,
          points: 25,
          slots: ["Elite"]
        }, {
          name: "Soontir Fel",
          faction: "Galactic Empire",
          id: 28,
          unique: true,
          ship: "TIE Interceptor",
          skill: 9,
          points: 27,
          slots: ["Elite"]
        }, {
          name: "Tycho Celchu",
          faction: "Rebel Alliance",
          id: 29,
          unique: true,
          ship: "A-Wing",
          skill: 8,
          points: 26,
          slots: ["Elite", "Missile"]
        }, {
          name: "Arvel Crynyd",
          faction: "Rebel Alliance",
          id: 30,
          unique: true,
          ship: "A-Wing",
          skill: 6,
          points: 23,
          slots: ["Missile"]
        }, {
          name: "Green Squadron Pilot",
          faction: "Rebel Alliance",
          id: 31,
          ship: "A-Wing",
          skill: 3,
          points: 19,
          slots: ["Elite", "Missile"]
        }, {
          name: "Prototype Pilot",
          faction: "Rebel Alliance",
          id: 32,
          ship: "A-Wing",
          skill: 1,
          points: 17,
          slots: ["Missile"]
        }, {
          name: "Outer Rim Smuggler",
          faction: "Rebel Alliance",
          id: 33,
          ship: "YT-1300",
          skill: 1,
          points: 27,
          slots: ["Crew", "Crew"]
        }, {
          name: "Chewbacca",
          faction: "Rebel Alliance",
          id: 34,
          unique: true,
          ship: "YT-1300",
          skill: 5,
          points: 42,
          slots: ["Elite", "Missile", "Crew", "Crew"],
          ship_override: {
            attack: 3,
            agility: 1,
            hull: 8,
            shields: 5
          }
        }, {
          name: "Lando Calrissian",
          faction: "Rebel Alliance",
          id: 35,
          unique: true,
          ship: "YT-1300",
          skill: 7,
          points: 44,
          slots: ["Elite", "Missile", "Crew", "Crew"],
          ship_override: {
            attack: 3,
            agility: 1,
            hull: 8,
            shields: 5
          }
        }, {
          name: "Han Solo",
          faction: "Rebel Alliance",
          id: 36,
          unique: true,
          ship: "YT-1300",
          skill: 9,
          points: 46,
          slots: ["Elite", "Missile", "Crew", "Crew"],
          ship_override: {
            attack: 3,
            agility: 1,
            hull: 8,
            shields: 5
          }
        }, {
          name: "Kath Scarlet",
          faction: "Galactic Empire",
          id: 37,
          unique: true,
          ship: "Firespray-31",
          skill: 7,
          points: 38,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Boba Fett",
          faction: "Galactic Empire",
          id: 38,
          unique: true,
          ship: "Firespray-31",
          skill: 8,
          points: 39,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Krassis Trelix",
          faction: "Galactic Empire",
          id: 39,
          unique: true,
          ship: "Firespray-31",
          skill: 5,
          points: 36,
          slots: ["Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Bounty Hunter",
          faction: "Galactic Empire",
          id: 40,
          ship: "Firespray-31",
          skill: 3,
          points: 33,
          slots: ["Cannon", "Bomb", "Crew", "Missile"]
        }, {
          name: "Ten Numb",
          faction: "Rebel Alliance",
          id: 41,
          unique: true,
          ship: "B-Wing",
          skill: 8,
          points: 31,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Ibtisam",
          faction: "Rebel Alliance",
          id: 42,
          unique: true,
          ship: "B-Wing",
          skill: 6,
          points: 28,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Dagger Squadron Pilot",
          faction: "Rebel Alliance",
          id: 43,
          ship: "B-Wing",
          skill: 4,
          points: 24,
          slots: ["System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Blue Squadron Pilot",
          faction: "Rebel Alliance",
          id: 44,
          ship: "B-Wing",
          skill: 2,
          points: 22,
          slots: ["System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Rebel Operative",
          faction: "Rebel Alliance",
          id: 45,
          ship: "HWK-290",
          skill: 2,
          points: 16,
          slots: ["Turret", "Crew"]
        }, {
          name: "Roark Garnet",
          faction: "Rebel Alliance",
          id: 46,
          unique: true,
          ship: "HWK-290",
          skill: 4,
          points: 19,
          slots: ["Turret", "Crew"]
        }, {
          name: "Kyle Katarn",
          faction: "Rebel Alliance",
          id: 47,
          unique: true,
          ship: "HWK-290",
          skill: 6,
          points: 21,
          slots: ["Elite", "Turret", "Crew"]
        }, {
          name: "Jan Ors",
          faction: "Rebel Alliance",
          id: 48,
          unique: true,
          ship: "HWK-290",
          skill: 8,
          points: 25,
          slots: ["Elite", "Turret", "Crew"]
        }, {
          name: "Scimitar Squadron Pilot",
          faction: "Galactic Empire",
          id: 49,
          ship: "TIE Bomber",
          skill: 2,
          points: 16,
          slots: ["Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Gamma Squadron Pilot",
          faction: "Galactic Empire",
          id: 50,
          ship: "TIE Bomber",
          skill: 4,
          points: 18,
          slots: ["Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Captain Jonus",
          faction: "Galactic Empire",
          id: 51,
          unique: true,
          ship: "TIE Bomber",
          skill: 6,
          points: 22,
          slots: ["Elite", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Major Rhymer",
          faction: "Galactic Empire",
          id: 52,
          unique: true,
          ship: "TIE Bomber",
          skill: 7,
          points: 26,
          slots: ["Elite", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb"]
        }, {
          name: "Captain Kagi",
          faction: "Galactic Empire",
          id: 53,
          unique: true,
          ship: "Lambda-Class Shuttle",
          skill: 8,
          points: 27,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Colonel Jendon",
          faction: "Galactic Empire",
          id: 54,
          unique: true,
          ship: "Lambda-Class Shuttle",
          skill: 6,
          points: 26,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Captain Yorr",
          faction: "Galactic Empire",
          id: 55,
          unique: true,
          ship: "Lambda-Class Shuttle",
          skill: 4,
          points: 24,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Omicron Group Pilot",
          faction: "Galactic Empire",
          id: 56,
          ship: "Lambda-Class Shuttle",
          skill: 2,
          points: 21,
          slots: ["System", "Cannon", "Crew", "Crew"]
        }, {
          name: "Lieutenant Lorrir",
          faction: "Galactic Empire",
          id: 57,
          unique: true,
          ship: "TIE Interceptor",
          skill: 5,
          points: 23,
          slots: []
        }, {
          name: "Royal Guard Pilot",
          faction: "Galactic Empire",
          id: 58,
          ship: "TIE Interceptor",
          skill: 6,
          points: 22,
          slots: ["Elite"]
        }, {
          name: "Tetran Cowall",
          faction: "Galactic Empire",
          id: 59,
          unique: true,
          ship: "TIE Interceptor",
          skill: 7,
          points: 24,
          slots: ["Elite"],
          modifier_func: function(stats) {
            return stats.maneuvers[1][5] = 3;
          }
        }, {
          name: "I messed up this pilot, sorry",
          id: 60,
          skip: true
        }, {
          name: "Kir Kanos",
          faction: "Galactic Empire",
          id: 61,
          unique: true,
          ship: "TIE Interceptor",
          skill: 6,
          points: 24,
          slots: []
        }, {
          name: "Carnor Jax",
          faction: "Galactic Empire",
          id: 62,
          unique: true,
          ship: "TIE Interceptor",
          skill: 8,
          points: 26,
          slots: ["Elite"]
        }, {
          name: "GR-75 Medium Transport",
          faction: "Rebel Alliance",
          id: 63,
          epic: true,
          ship: "GR-75 Medium Transport",
          skill: 3,
          points: 30,
          slots: ["Crew", "Crew", "Cargo", "Cargo", "Cargo"]
        }, {
          name: "Bandit Squadron Pilot",
          faction: "Rebel Alliance",
          id: 64,
          ship: "Z-95 Headhunter",
          skill: 2,
          points: 12,
          slots: ["Missile"]
        }, {
          name: "Tala Squadron Pilot",
          faction: "Rebel Alliance",
          id: 65,
          ship: "Z-95 Headhunter",
          skill: 4,
          points: 13,
          slots: ["Missile"]
        }, {
          name: "Lieutenant Blount",
          faction: "Rebel Alliance",
          id: 66,
          unique: true,
          ship: "Z-95 Headhunter",
          skill: 6,
          points: 17,
          slots: ["Elite", "Missile"]
        }, {
          name: "Airen Cracken",
          faction: "Rebel Alliance",
          id: 67,
          unique: true,
          ship: "Z-95 Headhunter",
          skill: 8,
          points: 19,
          slots: ["Elite", "Missile"]
        }, {
          name: "Delta Squadron Pilot",
          faction: "Galactic Empire",
          id: 68,
          ship: "TIE Defender",
          skill: 1,
          points: 30,
          slots: ["Cannon", "Missile"]
        }, {
          name: "Onyx Squadron Pilot",
          faction: "Galactic Empire",
          id: 69,
          ship: "TIE Defender",
          skill: 3,
          points: 32,
          slots: ["Cannon", "Missile"]
        }, {
          name: "Colonel Vessery",
          faction: "Galactic Empire",
          id: 70,
          unique: true,
          ship: "TIE Defender",
          skill: 6,
          points: 35,
          slots: ["Elite", "Cannon", "Missile"]
        }, {
          name: "Rexler Brath",
          faction: "Galactic Empire",
          id: 71,
          unique: true,
          ship: "TIE Defender",
          skill: 8,
          points: 37,
          slots: ["Elite", "Cannon", "Missile"]
        }, {
          name: "Knave Squadron Pilot",
          faction: "Rebel Alliance",
          id: 72,
          ship: "E-Wing",
          skill: 1,
          points: 27,
          slots: ["System", "Torpedo", "Astromech"]
        }, {
          name: "Blackmoon Squadron Pilot",
          faction: "Rebel Alliance",
          id: 73,
          ship: "E-Wing",
          skill: 3,
          points: 29,
          slots: ["System", "Torpedo", "Astromech"]
        }, {
          name: "Etahn A'baht",
          faction: "Rebel Alliance",
          id: 74,
          unique: true,
          ship: "E-Wing",
          skill: 5,
          points: 32,
          slots: ["Elite", "System", "Torpedo", "Astromech"]
        }, {
          name: "Corran Horn",
          faction: "Rebel Alliance",
          id: 75,
          unique: true,
          ship: "E-Wing",
          skill: 8,
          points: 35,
          slots: ["Elite", "System", "Torpedo", "Astromech"]
        }, {
          name: "Sigma Squadron Pilot",
          faction: "Galactic Empire",
          id: 76,
          ship: "TIE Phantom",
          skill: 3,
          points: 25,
          slots: ["System", "Crew"]
        }, {
          name: "Shadow Squadron Pilot",
          faction: "Galactic Empire",
          id: 77,
          ship: "TIE Phantom",
          skill: 5,
          points: 27,
          slots: ["System", "Crew"]
        }, {
          name: '"Echo"',
          faction: "Galactic Empire",
          id: 78,
          unique: true,
          ship: "TIE Phantom",
          skill: 6,
          points: 30,
          slots: ["Elite", "System", "Crew"]
        }, {
          name: '"Whisper"',
          faction: "Galactic Empire",
          id: 79,
          unique: true,
          ship: "TIE Phantom",
          skill: 7,
          points: 32,
          slots: ["Elite", "System", "Crew"]
        }, {
          name: "CR90 Corvette (Fore)",
          faction: "Rebel Alliance",
          id: 80,
          epic: true,
          ship: "CR90 Corvette (Fore)",
          skill: 4,
          points: 50,
          slots: ["Crew", "Hardpoint", "Hardpoint", "Team", "Team", "Cargo"]
        }, {
          name: "CR90 Corvette (Aft)",
          faction: "Rebel Alliance",
          id: 81,
          epic: true,
          ship: "CR90 Corvette (Aft)",
          skill: 4,
          points: 40,
          slots: ["Crew", "Hardpoint", "Team", "Cargo"]
        }, {
          name: "Wes Janson",
          faction: "Rebel Alliance",
          id: 82,
          unique: true,
          ship: "X-Wing",
          skill: 8,
          points: 29,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: "Jek Porkins",
          faction: "Rebel Alliance",
          id: 83,
          unique: true,
          ship: "X-Wing",
          skill: 7,
          points: 26,
          slots: ["Elite", "Torpedo", "Astromech"]
        }, {
          name: '"Hobbie" Klivian',
          faction: "Rebel Alliance",
          id: 84,
          unique: true,
          ship: "X-Wing",
          skill: 5,
          points: 25,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Tarn Mison",
          faction: "Rebel Alliance",
          id: 85,
          unique: true,
          ship: "X-Wing",
          skill: 3,
          points: 23,
          slots: ["Torpedo", "Astromech"]
        }, {
          name: "Jake Farrell",
          faction: "Rebel Alliance",
          id: 86,
          unique: true,
          ship: "A-Wing",
          skill: 7,
          points: 24,
          slots: ["Elite", "Missile"]
        }, {
          name: "Gemmer Sojan",
          faction: "Rebel Alliance",
          id: 87,
          unique: true,
          ship: "A-Wing",
          skill: 5,
          points: 22,
          slots: ["Missile"]
        }, {
          name: "Keyan Farlander",
          faction: "Rebel Alliance",
          id: 88,
          unique: true,
          ship: "B-Wing",
          skill: 7,
          points: 29,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "Nera Dantels",
          faction: "Rebel Alliance",
          id: 89,
          unique: true,
          ship: "B-Wing",
          skill: 5,
          points: 26,
          slots: ["Elite", "System", "Cannon", "Torpedo", "Torpedo"]
        }, {
          name: "CR90 Corvette (Crippled Fore)",
          skip: true,
          faction: "Rebel Alliance",
          id: 90,
          ship: "CR90 Corvette (Fore)",
          skill: 4,
          points: 0,
          epic: true,
          slots: ["Crew"],
          ship_override: {
            attack: 2,
            agility: 0,
            hull: 0,
            shields: 0,
            actions: []
          }
        }, {
          name: "CR90 Corvette (Crippled Aft)",
          skip: true,
          faction: "Rebel Alliance",
          id: 91,
          ship: "CR90 Corvette (Aft)",
          skill: 4,
          points: 0,
          epic: true,
          slots: ["Cargo"],
          ship_override: {
            energy: 1,
            agility: 0,
            hull: 0,
            shields: 0,
            actions: []
          },
          modifier_func: function(stats) {
            stats.maneuvers[2][1] = 0;
            stats.maneuvers[2][3] = 0;
            return stats.maneuvers[4][2] = 0;
          }
        }, {
          name: "Wild Space Fringer",
          faction: "Rebel Alliance",
          id: 92,
          ship: "YT-2400",
          skill: 2,
          points: 30,
          slots: ["Cannon", "Missile", "Crew"]
        }, {
          name: "Eaden Vrill",
          faction: "Rebel Alliance",
          id: 93,
          ship: "YT-2400",
          unique: true,
          skill: 3,
          points: 32,
          slots: ["Cannon", "Missile", "Crew"]
        }, {
          name: '"Leebo"',
          faction: "Rebel Alliance",
          id: 94,
          ship: "YT-2400",
          unique: true,
          skill: 5,
          points: 34,
          slots: ["Elite", "Cannon", "Missile", "Crew"]
        }, {
          name: "Dash Rendar",
          faction: "Rebel Alliance",
          id: 95,
          ship: "YT-2400",
          unique: true,
          skill: 7,
          points: 36,
          slots: ["Elite", "Cannon", "Missile", "Crew"]
        }, {
          name: "Patrol Leader",
          faction: "Galactic Empire",
          id: 96,
          ship: "VT-49 Decimator",
          skill: 3,
          points: 40,
          slots: ["Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Captain Oicunn",
          faction: "Galactic Empire",
          id: 97,
          ship: "VT-49 Decimator",
          skill: 4,
          points: 42,
          unique: true,
          slots: ["Elite", "Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Commander Kenkirk",
          faction: "Galactic Empire",
          id: 98,
          ship: "VT-49 Decimator",
          skill: 6,
          points: 44,
          unique: true,
          slots: ["Elite", "Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Rear Admiral Chiraneau",
          faction: "Galactic Empire",
          id: 99,
          ship: "VT-49 Decimator",
          skill: 8,
          points: 46,
          unique: true,
          slots: ["Elite", "Torpedo", "Crew", "Crew", "Crew", "Bomb"]
        }, {
          name: "Prince Xizor",
          faction: "Scum and Villainy",
          id: 100,
          unique: true,
          ship: "StarViper",
          skill: 7,
          points: 31,
          slots: ["Elite", "Torpedo"]
        }, {
          name: "Guri",
          faction: "Scum and Villainy",
          id: 101,
          unique: true,
          ship: "StarViper",
          skill: 5,
          points: 30,
          slots: ["Elite", "Torpedo"]
        }, {
          name: "Black Sun Vigo",
          faction: "Scum and Villainy",
          id: 102,
          ship: "StarViper",
          skill: 3,
          points: 27,
          slots: ["Torpedo"]
        }, {
          name: "Black Sun Enforcer",
          faction: "Scum and Villainy",
          id: 103,
          ship: "StarViper",
          skill: 1,
          points: 25,
          slots: ["Torpedo"]
        }, {
          name: "Serissu",
          faction: "Scum and Villainy",
          id: 104,
          ship: "M3-A Interceptor",
          skill: 8,
          points: 20,
          unique: true,
          slots: ["Elite"]
        }, {
          name: "Laetin A'shera",
          faction: "Scum and Villainy",
          id: 105,
          ship: "M3-A Interceptor",
          skill: 6,
          points: 18,
          unique: true,
          slots: []
        }, {
          name: "Tansarii Point Veteran",
          faction: "Scum and Villainy",
          id: 106,
          ship: "M3-A Interceptor",
          skill: 5,
          points: 17,
          slots: ["Elite"]
        }, {
          name: "Cartel Spacer",
          faction: "Scum and Villainy",
          id: 107,
          ship: "M3-A Interceptor",
          skill: 2,
          points: 14,
          slots: []
        }, {
          name: "IG-88A",
          faction: "Scum and Villainy",
          id: 108,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 36,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "IG-88B",
          faction: "Scum and Villainy",
          id: 109,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 36,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "IG-88C",
          faction: "Scum and Villainy",
          id: 110,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 36,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "IG-88D",
          faction: "Scum and Villainy",
          id: 111,
          unique: true,
          ship: "Aggressor",
          skill: 6,
          points: 36,
          slots: ["Elite", "System", "Cannon", "Cannon", "Bomb", "Illicit"]
        }, {
          name: "N'Dru Suhlak",
          unique: true,
          faction: "Scum and Villainy",
          id: 112,
          ship: "Z-95 Headhunter",
          skill: 7,
          points: 17,
          slots: ["Elite", "Missile", "Illicit"]
        }, {
          name: "Kaa'To Leeachos",
          unique: true,
          faction: "Scum and Villainy",
          id: 113,
          ship: "Z-95 Headhunter",
          skill: 5,
          points: 15,
          slots: ["Elite", "Missile", "Illicit"]
        }, {
          name: "Black Sun Soldier",
          faction: "Scum and Villainy",
          id: 114,
          ship: "Z-95 Headhunter",
          skill: 3,
          points: 13,
          slots: ["Missile", "Illicit"]
        }, {
          name: "Binayre Pirate",
          faction: "Scum and Villainy",
          id: 115,
          ship: "Z-95 Headhunter",
          skill: 1,
          points: 12,
          slots: ["Missile", "Illicit"]
        }, {
          name: "Boba Fett (Scum)",
          canonical_name: 'Boba Fett'.canonicalize(),
          faction: "Scum and Villainy",
          id: 116,
          ship: "Firespray-31",
          skill: 8,
          points: 39,
          unique: true,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Kath Scarlet (Scum)",
          canonical_name: 'Kath Scarlet'.canonicalize(),
          unique: true,
          faction: "Scum and Villainy",
          id: 117,
          ship: "Firespray-31",
          skill: 7,
          points: 38,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Emon Azzameen",
          unique: true,
          faction: "Scum and Villainy",
          id: 118,
          ship: "Firespray-31",
          skill: 6,
          points: 36,
          slots: ["Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Mandalorian Mercenary",
          faction: "Scum and Villainy",
          id: 119,
          ship: "Firespray-31",
          skill: 5,
          points: 35,
          slots: ["Elite", "Cannon", "Bomb", "Crew", "Missile", "Illicit"]
        }, {
          name: "Kavil",
          unique: true,
          faction: "Scum and Villainy",
          id: 120,
          ship: "Y-Wing",
          skill: 7,
          points: 24,
          slots: ["Elite", "Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Drea Renthal",
          unique: true,
          faction: "Scum and Villainy",
          id: 121,
          ship: "Y-Wing",
          skill: 5,
          points: 22,
          slots: ["Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Hired Gun",
          faction: "Scum and Villainy",
          id: 122,
          ship: "Y-Wing",
          skill: 4,
          points: 20,
          slots: ["Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Syndicate Thug",
          faction: "Scum and Villainy",
          id: 123,
          ship: "Y-Wing",
          skill: 2,
          points: 18,
          slots: ["Turret", "Torpedo", "Torpedo", "Salvaged Astromech"]
        }, {
          name: "Dace Bonearm",
          unique: true,
          faction: "Scum and Villainy",
          id: 124,
          ship: "HWK-290",
          skill: 7,
          points: 23,
          slots: ["Elite", "Turret", "Crew", "Illicit"]
        }, {
          name: "Palob Godalhi",
          unique: true,
          faction: "Scum and Villainy",
          id: 125,
          ship: "HWK-290",
          skill: 5,
          points: 20,
          slots: ["Elite", "Turret", "Crew", "Illicit"]
        }, {
          name: "Torkil Mux",
          unique: true,
          faction: "Scum and Villainy",
          id: 126,
          ship: "HWK-290",
          skill: 3,
          points: 19,
          slots: ["Turret", "Crew", "Illicit"]
        }, {
          name: "Spice Runner",
          faction: "Scum and Villainy",
          id: 127,
          ship: "HWK-290",
          skill: 1,
          points: 16,
          slots: ["Turret", "Crew", "Illicit"]
        }, {
          name: "Commander Alozen",
          faction: "Galactic Empire",
          id: 128,
          ship: "TIE Advanced",
          unique: true,
          skill: 5,
          points: 25,
          slots: ["Elite", "Missile"]
        }, {
          name: "Raider-class Corvette (Fore)",
          faction: "Galactic Empire",
          id: 129,
          ship: "Raider-class Corvette (Fore)",
          skill: 4,
          points: 50,
          epic: true,
          slots: ["Hardpoint", "Team", "Cargo"]
        }, {
          name: "Raider-class Corvette (Aft)",
          faction: "Galactic Empire",
          id: 130,
          ship: "Raider-class Corvette (Aft)",
          skill: 4,
          points: 50,
          epic: true,
          slots: ["Crew", "Crew", "Hardpoint", "Hardpoint", "Team", "Team", "Cargo"]
        }, {
          name: "Bossk",
          faction: "Scum and Villainy",
          id: 131,
          ship: "YV-666",
          unique: true,
          skill: 7,
          points: 35,
          slots: ["Elite", "Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit"]
        }, {
          name: "Moralo Eval",
          faction: "Scum and Villainy",
          id: 132,
          ship: "YV-666",
          unique: true,
          skill: 6,
          points: 34,
          slots: ["Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit"]
        }, {
          name: "Latts Razzi",
          faction: "Scum and Villainy",
          id: 133,
          ship: "YV-666",
          unique: true,
          skill: 5,
          points: 33,
          slots: ["Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit"]
        }, {
          name: "Trandoshan Slaver",
          faction: "Scum and Villainy",
          id: 134,
          ship: "YV-666",
          skill: 2,
          points: 29,
          slots: ["Cannon", "Missile", "Crew", "Crew", "Crew", "Illicit"]
        }, {
          name: "Talonbane Cobra",
          unique: true,
          id: 135,
          faction: "Scum and Villainy",
          ship: "Kihraxz Fighter",
          skill: 9,
          slots: ["Elite", "Missile", "Illicit"],
          points: 28
        }, {
          name: "Graz the Hunter",
          unique: true,
          id: 136,
          faction: "Scum and Villainy",
          ship: "Kihraxz Fighter",
          skill: 6,
          slots: ["Missile", "Illicit"],
          points: 25
        }, {
          name: "Black Sun Ace",
          faction: "Scum and Villainy",
          id: 137,
          ship: "Kihraxz Fighter",
          skill: 5,
          slots: ["Elite", "Missile", "Illicit"],
          points: 23
        }, {
          name: "Cartel Marauder",
          faction: "Scum and Villainy",
          id: 138,
          ship: "Kihraxz Fighter",
          skill: 2,
          slots: ["Missile", "Illicit"],
          points: 20
        }, {
          name: "Miranda Doni",
          unique: true,
          id: 139,
          faction: "Rebel Alliance",
          ship: "K-Wing",
          skill: 8,
          slots: ["Turret", "Torpedo", "Torpedo", "Missile", "Crew", "Bomb", "Bomb"],
          points: 29
        }, {
          name: "Esege Tuketu",
          unique: true,
          id: 140,
          faction: "Rebel Alliance",
          ship: "K-Wing",
          skill: 6,
          slots: ["Turret", "Torpedo", "Torpedo", "Missile", "Crew", "Bomb", "Bomb"],
          points: 28
        }, {
          name: "Guardian Squadron Pilot",
          faction: "Rebel Alliance",
          id: 141,
          ship: "K-Wing",
          skill: 4,
          slots: ["Turret", "Torpedo", "Torpedo", "Missile", "Crew", "Bomb", "Bomb"],
          points: 25
        }, {
          name: "Warden Squadron Pilot",
          faction: "Rebel Alliance",
          id: 142,
          ship: "K-Wing",
          skill: 2,
          slots: ["Turret", "Torpedo", "Torpedo", "Missile", "Crew", "Bomb", "Bomb"],
          points: 23
        }, {
          name: '"Redline"',
          unique: true,
          id: 143,
          faction: "Galactic Empire",
          ship: "TIE Punisher",
          skill: 7,
          slots: ["System", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb", "Bomb"],
          points: 27
        }, {
          name: '"Deathrain"',
          unique: true,
          id: 144,
          faction: "Galactic Empire",
          ship: "TIE Punisher",
          skill: 6,
          slots: ["System", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb", "Bomb"],
          points: 26
        }, {
          name: 'Black Eight Squadron Pilot',
          canonical_name: 'Black Eight Sq. Pilot'.canonicalize(),
          faction: "Galactic Empire",
          id: 145,
          ship: "TIE Punisher",
          skill: 4,
          slots: ["System", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb", "Bomb"],
          points: 23
        }, {
          name: 'Cutlass Squadron Pilot',
          faction: "Galactic Empire",
          id: 146,
          ship: "TIE Punisher",
          skill: 2,
          slots: ["System", "Torpedo", "Torpedo", "Missile", "Missile", "Bomb", "Bomb"],
          points: 21
        }, {
          name: "Juno Eclipse",
          id: 147,
          faction: "Galactic Empire",
          ship: "TIE Advanced",
          unique: true,
          skill: 8,
          points: 28,
          slots: ["Elite", "Missile"]
        }, {
          name: "Zertik Strom",
          id: 148,
          faction: "Galactic Empire",
          ship: "TIE Advanced",
          unique: true,
          skill: 6,
          points: 26,
          slots: ["Elite", "Missile"]
        }, {
          name: "Lieutenant Colzet",
          id: 149,
          faction: "Galactic Empire",
          ship: "TIE Advanced",
          unique: true,
          skill: 3,
          points: 23,
          slots: ["Missile"]
        }, {
          name: "Gozanti-class Cruiser",
          id: 150,
          faction: "Galactic Empire",
          ship: "Gozanti-class Cruiser",
          skill: 2,
          slots: ['Crew', 'Crew', 'Hardpoint', 'Team', 'Cargo', 'Cargo'],
          points: 40
        }, {
          name: '"Scourge"',
          id: 151,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Fighter",
          skill: 7,
          slots: ['Elite'],
          points: 17
        }, {
          name: '"Youngster"',
          id: 152,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Fighter",
          skill: 6,
          slots: ['Elite'],
          points: 15
        }, {
          name: '"Wampa"',
          id: 153,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Fighter",
          skill: 4,
          slots: [],
          points: 14
        }, {
          name: '"Chaser"',
          id: 154,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Fighter",
          skill: 3,
          slots: [],
          points: 14
        }, {
          name: "Hera Syndulla",
          id: 155,
          unique: true,
          faction: "Rebel Alliance",
          ship: "VCX-100",
          skill: 7,
          slots: ['System', 'Turret', 'Torpedo', 'Torpedo', 'Crew', 'Crew'],
          points: 40
        }, {
          name: "Kanan Jarrus",
          id: 156,
          unique: true,
          faction: "Rebel Alliance",
          ship: "VCX-100",
          skill: 5,
          slots: ['System', 'Turret', 'Torpedo', 'Torpedo', 'Crew', 'Crew'],
          points: 38
        }, {
          name: '"Chopper"',
          id: 157,
          unique: true,
          faction: "Rebel Alliance",
          ship: "VCX-100",
          skill: 4,
          slots: ['System', 'Turret', 'Torpedo', 'Torpedo', 'Crew', 'Crew'],
          points: 37
        }, {
          name: 'Lothal ???',
          id: 158,
          faction: "Rebel Alliance",
          ship: "VCX-100",
          skill: 3,
          slots: ['System', 'Turret', 'Torpedo', 'Torpedo', 'Crew', 'Crew'],
          points: 100
        }, {
          name: 'Hera Syndulla (Attack Shuttle)',
          id: 159,
          canonical_name: 'Hera Syndulla'.canonicalize(),
          unique: true,
          faction: "Rebel Alliance",
          ship: "Attack Shuttle",
          skill: 7,
          slots: ['Elite', 'Turret', 'Crew'],
          points: 22
        }, {
          name: 'Sabine Wren',
          id: 160,
          unique: true,
          faction: "Rebel Alliance",
          ship: "Attack Shuttle",
          skill: 5,
          slots: ['Elite', 'Turret', 'Crew'],
          points: 21
        }, {
          name: 'Ezra Bridger',
          id: 161,
          unique: true,
          faction: "Rebel Alliance",
          ship: "Attack Shuttle",
          skill: 4,
          slots: ['Elite', 'Turret', 'Crew'],
          points: 20
        }, {
          name: '"Zeb" Orrelios',
          id: 162,
          unique: true,
          faction: "Rebel Alliance",
          ship: "Attack Shuttle",
          skill: 3,
          slots: ['Turret', 'Crew'],
          points: 18
        }, {
          name: "The Inquisitor",
          id: 163,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Advanced Prototype",
          skill: 8,
          slots: ['Elite', 'Missile'],
          points: 25
        }, {
          name: "Valen Rudor",
          id: 164,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Advanced Prototype",
          skill: 6,
          slots: ['Elite', 'Missile'],
          points: 22
        }, {
          name: "Baron of ???",
          id: 165,
          faction: "Galactic Empire",
          ship: "TIE Advanced Prototype",
          skill: 4,
          slots: ['Missile'],
          points: 100
        }, {
          name: "Sienar Test Pilot",
          id: 166,
          faction: "Galactic Empire",
          ship: "TIE Advanced Prototype",
          skill: 2,
          slots: ['Missile'],
          points: 16
        }, {
          name: "Zuckuss",
          id: 167,
          unique: true,
          faction: "Scum and Villainy",
          ship: "G-1A Starfighter",
          skill: 7,
          slots: ['Elite', 'Crew', 'System', 'Illicit'],
          points: 28
        }, {
          name: "4-LOM",
          id: 168,
          unique: true,
          faction: "Scum and Villainy",
          ship: "G-1A Starfighter",
          skill: 6,
          slots: ['Crew', 'System', 'Illicit'],
          points: 100
        }, {
          name: "Gand ???",
          id: 169,
          faction: "Scum and Villainy",
          ship: "G-1A Starfighter",
          skill: 5,
          slots: ['Crew', 'System', 'Illicit'],
          points: 100
        }, {
          name: "Ruth???",
          id: 170,
          faction: "Scum and Villainy",
          ship: "G-1A Starfighter",
          skill: 3,
          slots: ['Crew', 'System', 'Illicit'],
          points: 100
        }, {
          name: "Dengar",
          id: 171,
          unique: true,
          faction: "Scum and Villainy",
          ship: "JumpMaster 5000",
          skill: 9,
          slots: ['Elite', 'Torpedo', 'Torpedo', 'Crew', 'Salvaged Astromech', 'Illicit'],
          points: 33
        }, {
          name: "Tel Trevura",
          id: 172,
          unique: true,
          faction: "Scum and Villainy",
          ship: "JumpMaster 5000",
          skill: 7,
          slots: ['Elite', 'Torpedo', 'Torpedo', 'Crew', 'Salvaged Astromech', 'Illicit'],
          points: 100
        }, {
          name: "Manaroo",
          id: 173,
          unique: true,
          faction: "Scum and Villainy",
          ship: "JumpMaster 5000",
          skill: 4,
          slots: ['Elite', 'Torpedo', 'Torpedo', 'Crew', 'Salvaged Astromech', 'Illicit'],
          points: 100
        }, {
          name: "Contrac???",
          id: 174,
          faction: "Scum and Villainy",
          ship: "JumpMaster 5000",
          skill: 3,
          slots: ['Elite', 'Torpedo', 'Torpedo', 'Crew', 'Salvaged Astromech', 'Illicit'],
          points: 100
        }, {
          name: "Poe Dameron",
          id: 175,
          unique: true,
          faction: "Resistance",
          ship: "T-70 X-Wing",
          skill: 8,
          slots: ['Elite', 'Torpedo', 'Astromech', 'Tech'],
          points: 31
        }, {
          name: '"Blue Ace"',
          id: 176,
          unique: true,
          faction: "Resistance",
          ship: "T-70 X-Wing",
          skill: 5,
          slots: ['Torpedo', 'Astromech', 'Tech'],
          points: 27
        }, {
          name: "Red Squadron Veteran",
          id: 177,
          faction: "Resistance",
          ship: "T-70 X-Wing",
          skill: 4,
          slots: ['Elite', 'Torpedo', 'Astromech', 'Tech'],
          points: 26
        }, {
          name: "Blue Squadron Novice",
          id: 178,
          faction: "Resistance",
          ship: "T-70 X-Wing",
          skill: 2,
          slots: ['Torpedo', 'Astromech', 'Tech'],
          points: 24
        }, {
          name: '"Omega Ace"',
          id: 179,
          unique: true,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 7,
          slots: ['Elite', 'Tech'],
          points: 20
        }, {
          name: '"Epsilon Leader"',
          id: 180,
          unique: true,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 6,
          slots: ['Tech'],
          points: 19
        }, {
          name: '"Zeta Ace"',
          id: 181,
          unique: true,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 5,
          slots: ['Elite', 'Tech'],
          points: 18
        }, {
          name: "Omega Squadron Pilot",
          id: 182,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 4,
          slots: ['Elite', 'Tech'],
          points: 17
        }, {
          name: "Zeta Squadron Pilot",
          id: 183,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 3,
          slots: ['Tech'],
          points: 16
        }, {
          name: "Epsilon Squadron Pilot",
          id: 184,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 1,
          slots: ['Tech'],
          points: 15
        }, {
          name: "Ello Asty",
          id: 185,
          unique: true,
          faction: "Resistance",
          ship: "T-70 X-Wing",
          skill: 7,
          slots: ['Elite', 'Torpedo', 'Astromech', 'Tech'],
          points: 30
        }, {
          name: '"Red Ace"',
          id: 186,
          unique: true,
          faction: "Resistance",
          ship: "T-70 X-Wing",
          skill: 6,
          slots: ['Torpedo', 'Astromech', 'Tech'],
          points: 29
        }, {
          name: '"Omega Leader"',
          id: 187,
          unique: true,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 8,
          slots: ['Elite', 'Tech'],
          points: 21
        }, {
          name: '"Zeta Leader"',
          id: 188,
          unique: true,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 7,
          slots: ['Elite', 'Tech'],
          points: 20
        }, {
          name: '"Epsilon Ace"',
          id: 189,
          unique: true,
          faction: "First Order",
          ship: "TIE/fo Fighter",
          skill: 4,
          slots: ['Tech'],
          points: 17
        }, {
          name: "Tomax Bren",
          id: 190,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Bomber",
          skill: 8,
          slots: ['Elite', 'Torpedo', 'Torpedo', 'Missile', 'Missile', 'Bomb'],
          points: 24
        }, {
          name: "Gamma Squadron Veteran",
          id: 191,
          faction: "Galactic Empire",
          ship: "TIE Bomber",
          skill: 5,
          slots: ['Elite', 'Torpedo', 'Torpedo', 'Missile', 'Missile', 'Bomb'],
          points: 19
        }, {
          name: '"Dea???"',
          id: 192,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Bomber",
          skill: 3,
          slots: ['Torpedo', 'Torpedo', 'Missile', 'Missile', 'Bomb'],
          points: 100
        }, {
          name: "Maarek Stele (TIE Defender)",
          canonical_name: 'Maarek Stele'.canonicalize(),
          id: 193,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Defender",
          skill: 7,
          slots: ['Cannon', 'Missile'],
          points: 100
        }, {
          name: "Glaive Squa???",
          id: 194,
          faction: "Galactic Empire",
          ship: "TIE Defender",
          skill: 6,
          slots: ['Cannon', 'Missile'],
          points: 100
        }, {
          name: "Count???",
          id: 195,
          unique: true,
          faction: "Galactic Empire",
          ship: "TIE Defender",
          skill: 5,
          slots: ['Cannon', 'Missile'],
          points: 100
        }
      ],
      upgradesById: [
        {
          name: "Ion Cannon Turret",
          id: 0,
          slot: "Turret",
          points: 5,
          attack: 3,
          range: "1-2"
        }, {
          name: "Proton Torpedoes",
          id: 1,
          slot: "Torpedo",
          points: 4,
          attack: 4,
          range: "2-3"
        }, {
          name: "R2 Astromech",
          id: 2,
          slot: "Astromech",
          points: 1,
          modifier_func: function(stats) {
            var j, ref, results, turn;
            if ((stats.maneuvers != null) && stats.maneuvers.length > 0) {
              results = [];
              for (turn = j = 0, ref = stats.maneuvers[1].length; 0 <= ref ? j < ref : j > ref; turn = 0 <= ref ? ++j : --j) {
                if (stats.maneuvers[1][turn] > 0) {
                  stats.maneuvers[1][turn] = 2;
                }
                if (stats.maneuvers[2][turn] > 0) {
                  results.push(stats.maneuvers[2][turn] = 2);
                } else {
                  results.push(void 0);
                }
              }
              return results;
            }
          }
        }, {
          name: "R2-D2",
          aka: ["R2-D2 (Crew)"],
          canonical_name: 'r2d2',
          id: 3,
          unique: true,
          slot: "Astromech",
          points: 4
        }, {
          name: "R2-F2",
          id: 4,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "R5-D8",
          id: 5,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "R5-K6",
          id: 6,
          unique: true,
          slot: "Astromech",
          points: 2
        }, {
          name: "R5 Astromech",
          id: 7,
          slot: "Astromech",
          points: 1
        }, {
          name: "Determination",
          id: 8,
          slot: "Elite",
          points: 1
        }, {
          name: "Swarm Tactics",
          id: 9,
          slot: "Elite",
          points: 2
        }, {
          name: "Squad Leader",
          id: 10,
          unique: true,
          slot: "Elite",
          points: 2
        }, {
          name: "Expert Handling",
          id: 11,
          slot: "Elite",
          points: 2
        }, {
          name: "Marksmanship",
          id: 12,
          slot: "Elite",
          points: 3
        }, {
          name: "Concussion Missiles",
          id: 13,
          slot: "Missile",
          points: 4,
          attack: 4,
          range: "2-3"
        }, {
          name: "Cluster Missiles",
          id: 14,
          slot: "Missile",
          points: 4,
          attack: 3,
          range: "1-2"
        }, {
          name: "Daredevil",
          id: 15,
          slot: "Elite",
          points: 3
        }, {
          name: "Elusiveness",
          id: 16,
          slot: "Elite",
          points: 2
        }, {
          name: "Homing Missiles",
          id: 17,
          slot: "Missile",
          attack: 4,
          range: "2-3",
          points: 5
        }, {
          name: "Push the Limit",
          id: 18,
          slot: "Elite",
          points: 3
        }, {
          name: "Deadeye",
          id: 19,
          slot: "Elite",
          points: 1
        }, {
          name: "Expose",
          id: 20,
          slot: "Elite",
          points: 4
        }, {
          name: "Gunner",
          id: 21,
          slot: "Crew",
          points: 5
        }, {
          name: "Ion Cannon",
          id: 22,
          slot: "Cannon",
          points: 3,
          attack: 3,
          range: "1-3"
        }, {
          name: "Heavy Laser Cannon",
          id: 23,
          slot: "Cannon",
          points: 7,
          attack: 4,
          range: "2-3"
        }, {
          name: "Seismic Charges",
          id: 24,
          slot: "Bomb",
          points: 2
        }, {
          name: "Mercenary Copilot",
          id: 25,
          slot: "Crew",
          points: 2
        }, {
          name: "Assault Missiles",
          id: 26,
          slot: "Missile",
          points: 5,
          attack: 4,
          range: "2-3"
        }, {
          name: "Veteran Instincts",
          id: 27,
          slot: "Elite",
          points: 1,
          modifier_func: function(stats) {
            return stats.skill += 2;
          }
        }, {
          name: "Proximity Mines",
          id: 28,
          slot: "Bomb",
          points: 3
        }, {
          name: "Weapons Engineer",
          id: 29,
          slot: "Crew",
          points: 3
        }, {
          name: "Draw Their Fire",
          id: 30,
          slot: "Elite",
          points: 1
        }, {
          name: "Luke Skywalker",
          id: 31,
          unique: true,
          faction: "Rebel Alliance",
          slot: "Crew",
          points: 7
        }, {
          name: "Nien Nunb",
          id: 32,
          unique: true,
          faction: "Rebel Alliance",
          slot: "Crew",
          points: 1,
          modifier_func: function(stats) {
            var j, len, ref, ref1, results, s;
            ref1 = (ref = stats.maneuvers) != null ? ref : [];
            results = [];
            for (j = 0, len = ref1.length; j < len; j++) {
              s = ref1[j];
              if (s[2] > 0) {
                results.push(s[2] = 2);
              } else {
                results.push(void 0);
              }
            }
            return results;
          }
        }, {
          name: "Chewbacca",
          id: 33,
          unique: true,
          faction: "Rebel Alliance",
          slot: "Crew",
          points: 4
        }, {
          name: "Advanced Proton Torpedoes",
          canonical_name: 'Adv. Proton Torpedoes'.canonicalize(),
          id: 34,
          slot: "Torpedo",
          attack: 5,
          range: "1",
          points: 6
        }, {
          name: "Autoblaster",
          id: 35,
          slot: "Cannon",
          attack: 3,
          range: "1",
          points: 5
        }, {
          name: "Fire-Control System",
          id: 36,
          slot: "System",
          points: 2
        }, {
          name: "Blaster Turret",
          id: 37,
          slot: "Turret",
          points: 4,
          attack: 3,
          range: "1-2"
        }, {
          name: "Recon Specialist",
          id: 38,
          slot: "Crew",
          points: 3
        }, {
          name: "Saboteur",
          id: 39,
          slot: "Crew",
          points: 2
        }, {
          name: "Intelligence Agent",
          id: 40,
          slot: "Crew",
          points: 1
        }, {
          name: "Proton Bombs",
          id: 41,
          slot: "Bomb",
          points: 5
        }, {
          name: "Adrenaline Rush",
          id: 42,
          slot: "Elite",
          points: 1
        }, {
          name: "Advanced Sensors",
          id: 43,
          slot: "System",
          points: 3
        }, {
          name: "Sensor Jammer",
          id: 44,
          slot: "System",
          points: 4
        }, {
          name: "Darth Vader",
          id: 45,
          unique: true,
          faction: "Galactic Empire",
          slot: "Crew",
          points: 3
        }, {
          name: "Rebel Captive",
          id: 46,
          unique: true,
          faction: "Galactic Empire",
          slot: "Crew",
          points: 3
        }, {
          name: "Flight Instructor",
          id: 47,
          slot: "Crew",
          points: 4
        }, {
          name: "Navigator",
          id: 48,
          slot: "Crew",
          points: 3,
          epic_restriction_func: function(ship) {
            var ref;
            return !((ref = ship.huge) != null ? ref : false);
          }
        }, {
          name: "Opportunist",
          id: 49,
          slot: "Elite",
          points: 4
        }, {
          name: "Comms Booster",
          id: 50,
          slot: "Cargo",
          points: 4
        }, {
          name: "Slicer Tools",
          id: 51,
          slot: "Cargo",
          points: 7
        }, {
          name: "Shield Projector",
          id: 52,
          slot: "Cargo",
          points: 4
        }, {
          name: "Ion Pulse Missiles",
          id: 53,
          slot: "Missile",
          points: 3,
          attack: 3,
          range: "2-3"
        }, {
          name: "Wingman",
          id: 54,
          slot: "Elite",
          points: 2
        }, {
          name: "Decoy",
          id: 55,
          slot: "Elite",
          points: 2
        }, {
          name: "Outmaneuver",
          id: 56,
          slot: "Elite",
          points: 3
        }, {
          name: "Predator",
          id: 57,
          slot: "Elite",
          points: 3
        }, {
          name: "Flechette Torpedoes",
          id: 58,
          slot: "Torpedo",
          points: 2,
          attack: 3,
          range: "2-3"
        }, {
          name: "R7 Astromech",
          id: 59,
          slot: "Astromech",
          points: 2
        }, {
          name: "R7-T1",
          id: 60,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "Tactician",
          id: 61,
          slot: "Crew",
          points: 2,
          limited: true
        }, {
          name: "R2-D2 (Crew)",
          aka: ["R2-D2"],
          canonical_name: 'r2d2',
          id: 62,
          unique: true,
          slot: "Crew",
          points: 4,
          faction: "Rebel Alliance"
        }, {
          name: "C-3PO",
          unique: true,
          id: 63,
          slot: "Crew",
          points: 3,
          faction: "Rebel Alliance"
        }, {
          name: "Single Turbolasers",
          id: 64,
          slot: "Hardpoint",
          points: 8,
          energy: 2,
          attack: 4,
          range: "3-5"
        }, {
          name: "Quad Laser Cannons",
          id: 65,
          slot: "Hardpoint",
          points: 6,
          energy: 2,
          attack: 3,
          range: "1-2"
        }, {
          name: "Tibanna Gas Supplies",
          id: 66,
          slot: "Cargo",
          points: 4,
          limited: true
        }, {
          name: "Ionization Reactor",
          id: 67,
          slot: "Cargo",
          points: 4,
          energy: 5,
          limited: true
        }, {
          name: "Engine Booster",
          id: 68,
          slot: "Cargo",
          points: 3,
          limited: true
        }, {
          name: "R3-A2",
          id: 69,
          unique: true,
          slot: "Astromech",
          points: 2
        }, {
          name: "R2-D6",
          id: 70,
          unique: true,
          slot: "Astromech",
          points: 1,
          restriction_func: function(ship) {
            var conferred_addon, j, k, len, len1, ref, ref1, ref2, upgrade;
            if (ship.effectiveStats().skill <= 2 || indexOf.call(ship.pilot.slots, 'Elite') >= 0) {
              return false;
            }
            ref = ship.upgrades;
            for (j = 0, len = ref.length; j < len; j++) {
              upgrade = ref[j];
              if ((upgrade != null) && ((ref1 = upgrade.data) != null ? ref1.name : void 0) !== 'R2-D6') {
                ref2 = upgrade.conferredAddons;
                for (k = 0, len1 = ref2.length; k < len1; k++) {
                  conferred_addon = ref2[k];
                  if (conferred_addon.slot === 'Elite') {
                    return false;
                  }
                }
              }
            }
            return true;
          },
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Elite"
            }
          ]
        }, {
          name: "Enhanced Scopes",
          id: 71,
          slot: "System",
          points: 1
        }, {
          name: "Chardaan Refit",
          id: 72,
          slot: "Missile",
          points: -2,
          ship: "A-Wing"
        }, {
          name: "Proton Rockets",
          id: 73,
          slot: "Missile",
          points: 3,
          attack: 2,
          range: "1"
        }, {
          name: "Kyle Katarn",
          id: 74,
          unique: true,
          slot: "Crew",
          points: 3,
          faction: "Rebel Alliance"
        }, {
          name: "Jan Ors",
          id: 75,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Rebel Alliance"
        }, {
          name: "Toryn Farr",
          id: 76,
          unique: true,
          slot: "Crew",
          points: 6,
          faction: "Rebel Alliance",
          restriction_func: exportObj.hugeOnly
        }, {
          name: "R4-D6",
          id: 77,
          unique: true,
          slot: "Astromech",
          points: 1
        }, {
          name: "R5-P9",
          id: 78,
          unique: true,
          slot: "Astromech",
          points: 3
        }, {
          name: "WED-15 Repair Droid",
          id: 79,
          slot: "Crew",
          points: 2,
          restriction_func: exportObj.hugeOnly
        }, {
          name: "Carlist Rieekan",
          id: 80,
          unique: true,
          slot: "Crew",
          points: 3,
          faction: "Rebel Alliance",
          restriction_func: exportObj.hugeOnly
        }, {
          name: "Jan Dodonna",
          id: 81,
          unique: true,
          slot: "Crew",
          points: 6,
          faction: "Rebel Alliance",
          restriction_func: exportObj.hugeOnly
        }, {
          name: "Expanded Cargo Hold",
          id: 82,
          slot: "Cargo",
          points: 1,
          ship: "GR-75 Medium Transport"
        }, {
          name: "Backup Shield Generator",
          id: 83,
          slot: "Cargo",
          limited: true,
          points: 3
        }, {
          name: "EM Emitter",
          id: 84,
          slot: "Cargo",
          limited: true,
          points: 3
        }, {
          name: "Frequency Jammer",
          id: 85,
          slot: "Cargo",
          limited: true,
          points: 4
        }, {
          name: "Han Solo",
          id: 86,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 2
        }, {
          name: "Leia Organa",
          id: 87,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 4
        }, {
          name: "Targeting Coordinator",
          id: 88,
          slot: "Crew",
          limited: true,
          points: 4
        }, {
          name: "Raymus Antilles",
          id: 89,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 6,
          restriction_func: exportObj.hugeOnly
        }, {
          name: "Gunnery Team",
          id: 90,
          slot: "Team",
          limited: true,
          points: 4
        }, {
          name: "Sensor Team",
          id: 91,
          slot: "Team",
          points: 4
        }, {
          name: "Engineering Team",
          id: 92,
          slot: "Team",
          limited: true,
          points: 4
        }, {
          name: "Lando Calrissian",
          id: 93,
          slot: "Crew",
          unique: true,
          faction: "Rebel Alliance",
          points: 3
        }, {
          name: "Mara Jade",
          id: 94,
          slot: "Crew",
          unique: true,
          faction: "Galactic Empire",
          points: 3
        }, {
          name: "Fleet Officer",
          id: 95,
          slot: "Crew",
          faction: "Galactic Empire",
          points: 3
        }, {
          name: "Stay On Target",
          id: 96,
          slot: "Elite",
          points: 2
        }, {
          name: "Dash Rendar",
          id: 97,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Rebel Alliance"
        }, {
          name: "Lone Wolf",
          id: 98,
          unique: true,
          slot: "Elite",
          points: 2
        }, {
          name: '"Leebo"',
          id: 99,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Rebel Alliance"
        }, {
          name: "Ruthlessness",
          id: 100,
          slot: "Elite",
          points: 3,
          faction: "Galactic Empire"
        }, {
          name: "Intimidation",
          id: 101,
          slot: "Elite",
          points: 2
        }, {
          name: "Ysanne Isard",
          id: 102,
          unique: true,
          slot: "Crew",
          points: 4,
          faction: "Galactic Empire"
        }, {
          name: "Moff Jerjerrod",
          id: 103,
          unique: true,
          slot: "Crew",
          points: 2,
          faction: "Galactic Empire"
        }, {
          name: "Ion Torpedoes",
          id: 104,
          slot: "Torpedo",
          points: 5,
          attack: 4,
          range: "2-3"
        }, {
          name: "Bodyguard",
          id: 105,
          unique: true,
          slot: "Elite",
          points: 2,
          faction: "Scum and Villainy"
        }, {
          name: "Calculation",
          id: 106,
          slot: "Elite",
          points: 1
        }, {
          name: "Accuracy Corrector",
          id: 107,
          slot: "System",
          points: 3
        }, {
          name: "Inertial Dampeners",
          id: 108,
          slot: "Illicit",
          points: 1
        }, {
          name: "Flechette Cannon",
          id: 109,
          slot: "Cannon",
          points: 2,
          attack: 3,
          range: "1-3"
        }, {
          name: '"Mangler" Cannon',
          id: 110,
          slot: "Cannon",
          points: 4,
          attack: 3,
          range: "1-3"
        }, {
          name: "Dead Man's Switch",
          id: 111,
          slot: "Illicit",
          points: 2
        }, {
          name: "Feedback Array",
          id: 112,
          slot: "Illicit",
          points: 2
        }, {
          name: '"Hot Shot" Blaster',
          id: 113,
          slot: "Illicit",
          points: 3,
          attack: 3,
          range: "1-2"
        }, {
          name: "Greedo",
          id: 114,
          unique: true,
          slot: "Crew",
          faction: "Scum and Villainy",
          points: 1
        }, {
          name: "Salvaged Astromech",
          id: 115,
          slot: "Salvaged Astromech",
          points: 2
        }, {
          name: "Bomb Loadout",
          id: 116,
          limited: true,
          slot: "Torpedo",
          points: 0,
          ship: "Y-Wing",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Bomb"
            }
          ]
        }, {
          name: '"Genius"',
          id: 117,
          unique: true,
          slot: "Salvaged Astromech",
          points: 0
        }, {
          name: "Unhinged Astromech",
          id: 118,
          slot: "Salvaged Astromech",
          points: 1,
          modifier_func: function(stats) {
            var j, ref, results, turn;
            if ((stats.maneuvers != null) && stats.maneuvers.length > 3) {
              results = [];
              for (turn = j = 0, ref = stats.maneuvers[3].length; 0 <= ref ? j < ref : j > ref; turn = 0 <= ref ? ++j : --j) {
                if (stats.maneuvers[3][turn] > 0) {
                  results.push(stats.maneuvers[3][turn] = 2);
                } else {
                  results.push(void 0);
                }
              }
              return results;
            }
          }
        }, {
          name: "R4-B11",
          id: 119,
          unique: true,
          slot: "Salvaged Astromech",
          points: 3
        }, {
          name: "Autoblaster Turret",
          id: 120,
          slot: "Turret",
          points: 2,
          attack: 2,
          range: "1"
        }, {
          name: "R4 Agromech",
          id: 121,
          slot: "Salvaged Astromech",
          points: 2
        }, {
          name: "K4 Security Droid",
          id: 122,
          slot: "Crew",
          faction: "Scum and Villainy",
          points: 3
        }, {
          name: "Outlaw Tech",
          id: 123,
          limited: true,
          slot: "Crew",
          faction: "Scum and Villainy",
          points: 2
        }, {
          name: 'Advanced Targeting Computer',
          canonical_name: 'Adv. Targeting Computer'.canonicalize(),
          id: 124,
          slot: "System",
          points: 5,
          ship: "TIE Advanced"
        }, {
          name: 'Ion Cannon Battery',
          id: 125,
          slot: "Hardpoint",
          points: 6,
          energy: 2,
          attack: 4,
          range: "2-4"
        }, {
          name: "Extra Munitions",
          id: 126,
          slot: "Torpedo",
          limited: true,
          points: 2
        }, {
          name: "Cluster Mines",
          id: 127,
          slot: "Bomb",
          points: 4
        }, {
          name: 'Glitterstim',
          id: 128,
          slot: "Illicit",
          points: 2
        }, {
          name: 'Grand Moff Tarkin',
          unique: true,
          id: 129,
          slot: "Crew",
          points: 6,
          faction: "Galactic Empire",
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Captain Needa',
          unique: true,
          id: 130,
          slot: "Crew",
          points: 2,
          faction: "Galactic Empire",
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Admiral Ozzel',
          unique: true,
          id: 131,
          slot: "Crew",
          points: 2,
          faction: "Galactic Empire",
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Emperor Palpatine',
          unique: true,
          id: 132,
          slot: "Crew",
          points: 8,
          faction: "Galactic Empire",
          restriction_func: function(ship, upgrade_obj) {
            return ship.hasAnotherUnoccupiedSlotLike(upgrade_obj);
          },
          validation_func: function(ship, upgrade_obj) {
            return upgrade_obj.occupiesAnotherUpgradeSlot();
          },
          also_occupies_upgrades: ["Crew"]
        }, {
          name: 'Bossk',
          unique: true,
          id: 133,
          faction: "Scum and Villainy",
          slot: "Crew",
          points: 2
        }, {
          name: "Lightning Reflexes",
          id: 134,
          slot: "Elite",
          points: 1,
          restriction_func: function(ship) {
            var ref, ref1;
            return !(((ref = ship.data.large) != null ? ref : false) || ((ref1 = ship.data.huge) != null ? ref1 : false));
          }
        }, {
          name: "Twin Laser Turret",
          id: 135,
          slot: "Turret",
          points: 6,
          attack: 3,
          range: "2-3"
        }, {
          name: "Plasma Torpedoes",
          id: 136,
          slot: "Torpedo",
          points: 3,
          attack: 4,
          range: "2-3"
        }, {
          name: "Ion Bombs",
          id: 137,
          slot: "Bomb",
          points: 2
        }, {
          name: "Conner Net",
          id: 138,
          slot: "Bomb",
          points: 4
        }, {
          name: "Bombardier",
          id: 139,
          slot: "Crew",
          points: 1
        }, {
          name: 'Crack Shot',
          id: 140,
          slot: 'Elite',
          points: 1
        }, {
          name: "Advanced Homing Missiles",
          canonical_name: 'Adv. Homing Missiles'.canonicalize(),
          id: 141,
          slot: "Missile",
          points: 3,
          attack: 3,
          range: "2"
        }, {
          name: 'Agent Kallus',
          id: 142,
          unique: true,
          points: 2,
          slot: 'Crew',
          faction: 'Galactic Empire'
        }, {
          name: 'XX-23 S-Thread Tracers',
          id: 143,
          points: 1,
          slot: 'Missile',
          attack: 3,
          range: '1-3'
        }, {
          name: "Tractor Beam",
          id: 144,
          slot: "Cannon",
          attack: 3,
          range: "1-3",
          points: 1
        }, {
          name: "Cloaking Device",
          id: 145,
          unique: true,
          slot: "Illicit",
          points: 2,
          restriction_func: function(ship) {
            var ref, ref1;
            return !(((ref = ship.data.large) != null ? ref : false) || ((ref1 = ship.data.huge) != null ? ref1 : false));
          }
        }, {
          name: 'Shield Technician',
          id: 146,
          slot: "Crew",
          points: 1,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Weapons Guidance',
          id: 147,
          slot: "Tech",
          points: 2
        }, {
          name: 'BB-8',
          id: 148,
          unique: true,
          slot: "Astromech",
          points: 2
        }, {
          name: 'R5-X3',
          id: 149,
          unique: true,
          slot: "Astromech",
          points: 1
        }, {
          name: 'Wired',
          id: 150,
          slot: "Elite",
          points: 1
        }, {
          name: 'Cool Hand',
          id: 151,
          slot: 'Elite',
          points: 1
        }, {
          name: 'Juke',
          id: 152,
          slot: 'Elite',
          points: 2,
          restriction_func: function(ship) {
            var ref, ref1;
            return !(((ref = ship.data.large) != null ? ref : false) || ((ref1 = ship.data.huge) != null ? ref1 : false));
          }
        }, {
          name: 'Comm Relay',
          id: 153,
          slot: 'Tech',
          points: 3
        }, {
          name: 'Dual Laser Turret',
          id: 154,
          points: 5,
          slot: 'Hardpoint',
          attack: 3,
          range: '1-3',
          energy: 1,
          ship: 'Gozanti-class Cruiser'
        }, {
          name: 'Broadcast Array',
          id: 155,
          ship: 'Gozanti-class Cruiser',
          points: 2,
          slot: 'Cargo',
          modifier_func: function(stats) {
            if (indexOf.call(stats.actions, 'Jam') < 0) {
              return stats.actions.push('Jam');
            }
          }
        }, {
          name: 'Rear Admiral Chiraneau',
          id: 156,
          unique: true,
          points: 3,
          slot: 'Crew',
          faction: 'Galactic Empire',
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Ordnance Experts',
          id: 157,
          limited: true,
          points: 5,
          slot: 'Team'
        }, {
          name: 'Docking Clamps',
          id: 158,
          points: 0,
          limited: true,
          slot: 'Cargo',
          ship: 'Gozanti-class Cruiser'
        }, {
          name: 'Kanan Jarrus',
          id: 159,
          unique: true,
          faction: 'Rebel Alliance',
          points: 3,
          slot: 'Crew'
        }, {
          name: '"Zeb" Orrelios',
          id: 160,
          unique: true,
          faction: 'Rebel Alliance',
          points: 1,
          slot: 'Crew'
        }, {
          name: 'Reinforced Deflectors',
          id: 161,
          points: 3,
          slot: 'System',
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.large) != null ? ref : false;
          }
        }, {
          name: 'Dorsal Turret',
          id: 162,
          points: 3,
          slot: 'Turret',
          attack: 2,
          range: '1-2'
        }, {
          name: 'Targeting Astromech',
          id: 163,
          slot: 'Astromech',
          points: 2
        }, {
          name: 'Hera Syndulla',
          id: 164,
          unique: true,
          faction: 'Rebel Alliance',
          points: 1,
          slot: 'Crew'
        }, {
          name: 'Ezra Bridger',
          id: 165,
          unique: true,
          faction: 'Rebel Alliance',
          points: 3,
          slot: 'Crew'
        }, {
          name: 'Sabine Wren',
          id: 166,
          unique: true,
          faction: 'Rebel Alliance',
          points: 2,
          slot: 'Crew',
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Bomb"
            }
          ]
        }, {
          name: '"Chopper"',
          id: 167,
          unique: true,
          faction: 'Rebel Alliance',
          points: 0,
          slot: 'Crew'
        }, {
          name: 'Construction Droid',
          id: 168,
          points: 3,
          slot: 'Crew',
          limited: true,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Cluster Bombs',
          id: 169,
          points: 4,
          slot: 'Cargo'
        }
      ],
      modificationsById: [
        {
          name: "Zero modification",
          id: 0,
          skip: true
        }, {
          name: "Stealth Device",
          id: 1,
          points: 3,
          modifier_func: function(stats) {
            return stats.agility += 1;
          }
        }, {
          name: "Shield Upgrade",
          id: 2,
          points: 4,
          modifier_func: function(stats) {
            return stats.shields += 1;
          }
        }, {
          name: "Engine Upgrade",
          id: 3,
          points: 4,
          modifier_func: function(stats) {
            if (indexOf.call(stats.actions, 'Boost') < 0) {
              return stats.actions.push('Boost');
            }
          }
        }, {
          name: "Anti-Pursuit Lasers",
          id: 4,
          points: 2,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.large) != null ? ref : false;
          }
        }, {
          name: "Targeting Computer",
          id: 5,
          points: 2,
          modifier_func: function(stats) {
            if (indexOf.call(stats.actions, 'Target Lock') < 0) {
              return stats.actions.push('Target Lock');
            }
          }
        }, {
          name: "Hull Upgrade",
          id: 6,
          points: 3,
          modifier_func: function(stats) {
            return stats.hull += 1;
          }
        }, {
          name: "Munitions Failsafe",
          id: 7,
          points: 1
        }, {
          name: "Stygium Particle Accelerator",
          id: 8,
          points: 2
        }, {
          name: "Advanced Cloaking Device",
          id: 9,
          points: 4,
          ship: "TIE Phantom"
        }, {
          name: "Combat Retrofit",
          id: 10,
          points: 10,
          ship: "GR-75 Medium Transport",
          huge: true,
          modifier_func: function(stats) {
            stats.hull += 2;
            return stats.shields += 1;
          }
        }, {
          name: "B-Wing/E2",
          id: 11,
          points: 1,
          ship: "B-Wing",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Crew"
            }
          ]
        }, {
          name: "Countermeasures",
          id: 12,
          points: 3,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.large) != null ? ref : false;
          }
        }, {
          name: "Experimental Interface",
          id: 13,
          unique: true,
          points: 3
        }, {
          name: "Tactical Jammer",
          id: 14,
          points: 1,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.large) != null ? ref : false;
          }
        }, {
          name: "Autothrusters",
          id: 15,
          points: 2,
          restriction_func: function(ship) {
            return indexOf.call(ship.effectiveStats().actions, "Boost") >= 0;
          }
        }, {
          name: "Advanced SLAM",
          id: 16,
          points: 2
        }, {
          name: "Twin Ion Engine Mk. II",
          id: 17,
          points: 1,
          restriction_func: function(ship) {
            return ship.data.name.indexOf('TIE') !== -1;
          },
          modifier_func: function(stats) {
            var j, len, ref, ref1, results, s;
            ref1 = (ref = stats.maneuvers) != null ? ref : [];
            results = [];
            for (j = 0, len = ref1.length; j < len; j++) {
              s = ref1[j];
              if (s[1] !== 0) {
                s[1] = 2;
              }
              if (s[3] !== 0) {
                results.push(s[3] = 2);
              } else {
                results.push(void 0);
              }
            }
            return results;
          }
        }, {
          name: "Maneuvering Fins",
          id: 18,
          points: 1,
          ship: "YV-666"
        }, {
          name: "Ion Projector",
          id: 19,
          points: 2,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.large) != null ? ref : false;
          }
        }, {
          name: 'Integrated Astromech',
          id: 20,
          restriction_func: function(ship) {
            return ship.data.canonical_name.indexOf('xwing') !== -1;
          },
          points: 0
        }, {
          name: 'Optimized Generators',
          id: 21,
          points: 5,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Automated Protocols',
          id: 22,
          points: 5,
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Ordnance Tubes',
          id: 23,
          points: 5,
          slot: 'Hardpoint',
          restriction_func: function(ship) {
            var ref;
            return (ref = ship.data.huge) != null ? ref : false;
          }
        }, {
          name: 'Long-Range Scanners',
          id: 24,
          points: 0,
          restriction_func: function(ship) {
            var upgrade;
            return (((function() {
              var j, len, ref, results;
              ref = ship.upgrades;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                upgrade = ref[j];
                if (upgrade.slot === 'Torpedo' && (upgrade.occupied_by == null)) {
                  results.push(upgrade);
                }
              }
              return results;
            })()).length >= 1) && (((function() {
              var j, len, ref, results;
              ref = ship.upgrades;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                upgrade = ref[j];
                if (upgrade.slot === 'Missile' && (upgrade.occupied_by == null)) {
                  results.push(upgrade);
                }
              }
              return results;
            })()).length >= 1);
          }
        }, {
          name: "Guidance Chips",
          id: 25,
          points: 0
        }
      ],
      titlesById: [
        {
          name: "Zero Title",
          id: 0,
          skip: true
        }, {
          name: "Slave I",
          id: 1,
          unique: true,
          points: 0,
          ship: "Firespray-31",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Torpedo"
            }
          ]
        }, {
          name: "Millennium Falcon",
          id: 2,
          unique: true,
          points: 1,
          ship: "YT-1300",
          actions: "Evade",
          modifier_func: function(stats) {
            if (indexOf.call(stats.actions, 'Evade') < 0) {
              return stats.actions.push('Evade');
            }
          }
        }, {
          name: "Moldy Crow",
          id: 3,
          unique: true,
          points: 3,
          ship: "HWK-290"
        }, {
          name: "ST-321",
          id: 4,
          unique: true,
          points: 3,
          ship: "Lambda-Class Shuttle"
        }, {
          name: "Royal Guard TIE",
          id: 5,
          points: 0,
          ship: "TIE Interceptor",
          confersAddons: [
            {
              type: exportObj.Modification
            }
          ],
          restriction_func: function(ship) {
            return ship.effectiveStats().skill > 4;
          },
          special_case: 'Royal Guard TIE'
        }, {
          name: "Dodonna's Pride",
          id: 6,
          unique: true,
          points: 4,
          ship: "CR90 Corvette (Fore)"
        }, {
          name: "A-Wing Test Pilot",
          id: 7,
          points: 0,
          ship: "A-Wing",
          restriction_func: function(ship) {
            return ship.effectiveStats().skill > 1;
          },
          validation_func: function(ship, upgrade_obj) {
            var elite, elites, upgrade;
            if (!(ship.effectiveStats().skill > 1)) {
              return false;
            }
            elites = (function() {
              var j, len, ref, results;
              ref = ship.upgrades;
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                upgrade = ref[j];
                if (upgrade.slot === 'Elite' && (upgrade.data != null)) {
                  results.push(upgrade.data.canonical_name);
                }
              }
              return results;
            })();
            while (elites.length > 0) {
              elite = elites.pop();
              if (indexOf.call(elites, elite) >= 0) {
                return false;
              }
            }
            return true;
          },
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Elite"
            }
          ],
          special_case: "A-Wing Test Pilot"
        }, {
          name: "B-Wing/E",
          id: 8,
          skip: true,
          points: 99,
          ship: "B-Wing",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Crew"
            }
          ]
        }, {
          name: "Tantive IV",
          id: 9,
          unique: true,
          points: 4,
          ship: "CR90 Corvette (Fore)",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Crew"
            }, {
              type: exportObj.Upgrade,
              slot: "Team"
            }
          ]
        }, {
          name: "Bright Hope",
          id: 10,
          energy: "+2",
          unique: true,
          points: 5,
          ship: "GR-75 Medium Transport",
          modifier_func: function(stats) {
            return stats.energy += 2;
          }
        }, {
          name: "Quantum Storm",
          id: 11,
          energy: "+1",
          unique: true,
          points: 4,
          ship: "GR-75 Medium Transport",
          modifier_func: function(stats) {
            return stats.energy += 1;
          }
        }, {
          name: "Dutyfree",
          id: 12,
          energy: "+0",
          unique: true,
          points: 2,
          ship: "GR-75 Medium Transport"
        }, {
          name: "Jaina's Light",
          id: 13,
          unique: true,
          points: 2,
          ship: "CR90 Corvette (Fore)"
        }, {
          name: "Outrider",
          id: 14,
          unique: true,
          points: 5,
          ship: "YT-2400"
        }, {
          name: "Dauntless",
          id: 15,
          unique: true,
          points: 2,
          ship: "VT-49 Decimator"
        }, {
          name: "Virago",
          id: 16,
          unique: true,
          points: 1,
          ship: "StarViper",
          restriction_func: function(ship) {
            return ship.pilot.skill > 3;
          },
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "System"
            }, {
              type: exportObj.Upgrade,
              slot: "Illicit"
            }
          ]
        }, {
          name: '"Heavy Scyk" Interceptor (Cannon)',
          canonical_name: '"Heavy Scyk" Interceptor'.canonicalize(),
          id: 17,
          points: 2,
          ship: "M3-A Interceptor",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Cannon"
            }
          ]
        }, {
          name: '"Heavy Scyk" Interceptor (Torpedo)',
          canonical_name: '"Heavy Scyk" Interceptor'.canonicalize(),
          id: 18,
          points: 2,
          ship: "M3-A Interceptor",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Torpedo"
            }
          ]
        }, {
          name: '"Heavy Scyk" Interceptor (Missile)',
          canonical_name: '"Heavy Scyk" Interceptor'.canonicalize(),
          id: 19,
          points: 2,
          ship: "M3-A Interceptor",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Missile"
            }
          ]
        }, {
          name: 'IG-2000',
          id: 20,
          points: 0,
          ship: "Aggressor"
        }, {
          name: "BTL-A4 Y-Wing",
          id: 21,
          points: 0,
          ship: "Y-Wing"
        }, {
          name: "Andrasta",
          id: 22,
          unique: true,
          points: 0,
          ship: "Firespray-31",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "Bomb"
            }, {
              type: exportObj.Upgrade,
              slot: "Bomb"
            }
          ]
        }, {
          name: 'TIE/x1',
          id: 23,
          points: 0,
          ship: "TIE Advanced",
          confersAddons: [
            {
              type: exportObj.Upgrade,
              slot: "System",
              adjustment_func: function(upgrade) {
                var copy;
                copy = $.extend(true, {}, upgrade);
                copy.points = Math.max(0, copy.points - 4);
                return copy;
              }
            }
          ]
        }, {
          name: "Hound's Tooth",
          id: 24,
          points: 6,
          unique: true,
          ship: "YV-666"
        }, {
          name: "Ghost",
          id: 25,
          unique: true,
          points: 0,
          ship: "VCX-100"
        }, {
          name: "Phantom",
          id: 26,
          unique: true,
          points: 0,
          ship: "Attack Shuttle"
        }, {
          name: "TIE/v1",
          id: 27,
          points: 1,
          ship: "TIE Advanced Prototype"
        }, {
          name: "Mist Hunter",
          id: 28,
          unique: true,
          points: 0,
          ship: "G-1A Starfighter",
          confersAddons: [
            {
              type: exportObj.RestrictedUpgrade,
              slot: "Cannon",
              filter_func: function(upgrade) {
                return upgrade.english_name === 'Tractor Beam';
              },
              auto_equip: 144
            }
          ],
          modifier_func: function(stats) {
            if (indexOf.call(stats.actions, 'Barrel Roll') < 0) {
              return stats.actions.push('Barrel Roll');
            }
          }
        }, {
          name: "Punishing One",
          id: 29,
          unique: true,
          points: 12,
          ship: "JumpMaster 5000",
          modifier_func: function(stats) {
            return stats.attack += 1;
          }
        }, {
          name: 'Assailer',
          id: 30,
          points: 2,
          unique: true,
          ship: "Raider-class Corvette (Aft)"
        }, {
          name: 'Instigator',
          id: 31,
          points: 4,
          unique: true,
          ship: "Raider-class Corvette (Aft)"
        }, {
          name: 'Impetuous',
          id: 32,
          points: 3,
          unique: true,
          ship: "Raider-class Corvette (Aft)"
        }, {
          name: 'TIE/x7',
          id: 33,
          ship: 'TIE Defender',
          points: -2,
          unequips_upgrades: ['Cannon', 'Missile'],
          also_occupies_upgrades: ['Cannon', 'Missile']
        }, {
          name: 'TIE/D',
          id: 34,
          ship: 'TIE Defender',
          points: 0
        }, {
          name: 'TIE Shuttle',
          id: 35,
          ship: 'TIE Bomber',
          points: 0,
          unequips_upgrades: ['Torpedo', 'Torpedo', 'Missile', 'Missile', 'Bomb'],
          also_occupies_upgrades: ['Torpedo', 'Torpedo', 'Missile', 'Missile', 'Bomb'],
          confersAddons: [
            {
              type: exportObj.RestrictedUpgrade,
              slot: 'Crew',
              filter_func: function(upgrade) {
                return upgrade.points <= 4;
              }
            }, {
              type: exportObj.RestrictedUpgrade,
              slot: 'Crew',
              filter_func: function(upgrade) {
                return upgrade.points <= 4;
              }
            }
          ]
        }, {
          name: 'Requiem',
          id: 36,
          unique: true,
          ship: 'Gozanti-class Cruiser',
          energy: '+0',
          points: 4
        }, {
          name: 'Vector',
          id: 37,
          unique: true,
          ship: 'Gozanti-class Cruiser',
          energy: '+1',
          points: 2,
          modifier_func: function(stats) {
            return stats.energy += 1;
          }
        }, {
          name: 'Suppressor',
          id: 38,
          unique: true,
          ship: 'Gozanti-class Cruiser',
          energy: '+2',
          points: 6,
          modifier_func: function(stats) {
            return stats.energy += 2;
          }
        }
      ]
    };
  };

  exportObj.setupCardData = function(basic_cards, pilot_translations, upgrade_translations, modification_translations, title_translations) {
    var base, base1, base2, base3, base4, base5, base6, base7, card, cards, e, error, error1, error2, error3, error4, expansion, field, i, j, k, l, len, len1, len10, len11, len12, len2, len3, len4, len5, len6, len7, len8, len9, m, modification, modification_data, modification_name, n, name, name1, name2, name3, name4, name5, name6, o, p, pilot, pilot_data, pilot_name, q, r, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref3, ref4, ref5, ref6, ref7, ref8, ref9, source, t, title, title_data, title_name, translation, translations, u, upgrade, upgrade_data, upgrade_name, v, w;
    ref = basic_cards.pilotsById;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      pilot_data = ref[i];
      if (pilot_data.id !== i) {
        throw new Error("ID mismatch: pilot at index " + i + " has ID " + pilot_data.id);
      }
    }
    ref1 = basic_cards.upgradesById;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      upgrade_data = ref1[i];
      if (upgrade_data.id !== i) {
        throw new Error("ID mismatch: upgrade at index " + i + " has ID " + upgrade_data.id);
      }
    }
    ref2 = basic_cards.titlesById;
    for (i = l = 0, len2 = ref2.length; l < len2; i = ++l) {
      title_data = ref2[i];
      if (title_data.id !== i) {
        throw new Error("ID mismatch: title at index " + i + " has ID " + title_data.id);
      }
    }
    ref3 = basic_cards.modificationsById;
    for (i = m = 0, len3 = ref3.length; m < len3; i = ++m) {
      modification_data = ref3[i];
      if (modification_data.id !== i) {
        throw new Error("ID mismatch: modification at index " + i + " has ID " + modification_data.id);
      }
    }
    exportObj.pilots = {};
    ref4 = basic_cards.pilotsById;
    for (n = 0, len4 = ref4.length; n < len4; n++) {
      pilot_data = ref4[n];
      if (pilot_data.skip == null) {
        pilot_data.sources = [];
        pilot_data.english_name = pilot_data.name;
        pilot_data.english_ship = pilot_data.ship;
        if (pilot_data.canonical_name == null) {
          pilot_data.canonical_name = pilot_data.english_name.canonicalize();
        }
        exportObj.pilots[pilot_data.name] = pilot_data;
      }
    }
    for (pilot_name in pilot_translations) {
      translations = pilot_translations[pilot_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.pilots[pilot_name][field] = translation;
        } catch (error) {
          e = error;
          console.error("Cannot find translation for attribute " + field + " for pilot " + pilot_name);
          throw e;
        }
      }
    }
    exportObj.upgrades = {};
    ref5 = basic_cards.upgradesById;
    for (o = 0, len5 = ref5.length; o < len5; o++) {
      upgrade_data = ref5[o];
      if (upgrade_data.skip == null) {
        upgrade_data.sources = [];
        upgrade_data.english_name = upgrade_data.name;
        if (upgrade_data.canonical_name == null) {
          upgrade_data.canonical_name = upgrade_data.english_name.canonicalize();
        }
        exportObj.upgrades[upgrade_data.name] = upgrade_data;
      }
    }
    for (upgrade_name in upgrade_translations) {
      translations = upgrade_translations[upgrade_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.upgrades[upgrade_name][field] = translation;
        } catch (error1) {
          e = error1;
          console.error("Cannot find translation for attribute " + field + " for upgrade " + upgrade_name);
          throw e;
        }
      }
    }
    exportObj.modifications = {};
    ref6 = basic_cards.modificationsById;
    for (p = 0, len6 = ref6.length; p < len6; p++) {
      modification_data = ref6[p];
      if (modification_data.skip == null) {
        modification_data.sources = [];
        modification_data.english_name = modification_data.name;
        if (modification_data.canonical_name == null) {
          modification_data.canonical_name = modification_data.english_name.canonicalize();
        }
        exportObj.modifications[modification_data.name] = modification_data;
      }
    }
    for (modification_name in modification_translations) {
      translations = modification_translations[modification_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.modifications[modification_name][field] = translation;
        } catch (error2) {
          e = error2;
          console.error("Cannot find translation for attribute " + field + " for modification " + modification_name);
          throw e;
        }
      }
    }
    exportObj.titles = {};
    ref7 = basic_cards.titlesById;
    for (q = 0, len7 = ref7.length; q < len7; q++) {
      title_data = ref7[q];
      if (title_data.skip == null) {
        title_data.sources = [];
        title_data.english_name = title_data.name;
        if (title_data.canonical_name == null) {
          title_data.canonical_name = title_data.english_name.canonicalize();
        }
        exportObj.titles[title_data.name] = title_data;
      }
    }
    for (title_name in title_translations) {
      translations = title_translations[title_name];
      for (field in translations) {
        translation = translations[field];
        try {
          exportObj.titles[title_name][field] = translation;
        } catch (error3) {
          e = error3;
          console.error("Cannot find translation for attribute " + field + " for title " + title_name);
          throw e;
        }
      }
    }
    ref8 = exportObj.manifestByExpansion;
    for (expansion in ref8) {
      cards = ref8[expansion];
      for (r = 0, len8 = cards.length; r < len8; r++) {
        card = cards[r];
        if (card.skipForSource) {
          continue;
        }
        try {
          switch (card.type) {
            case 'pilot':
              exportObj.pilots[card.name].sources.push(expansion);
              break;
            case 'upgrade':
              exportObj.upgrades[card.name].sources.push(expansion);
              break;
            case 'modification':
              exportObj.modifications[card.name].sources.push(expansion);
              break;
            case 'title':
              exportObj.titles[card.name].sources.push(expansion);
              break;
            case 'ship':
              '';
              break;
            default:
              throw new Error("Unexpected card type " + card.type + " for card " + card.name + " of " + expansion);
          }
        } catch (error4) {
          e = error4;
          console.error("Error adding card " + card.name + " (" + card.type + ") from " + expansion);
        }
      }
    }
    ref9 = exportObj.pilots;
    for (name in ref9) {
      card = ref9[name];
      card.sources = card.sources.sort();
    }
    ref10 = exportObj.upgrades;
    for (name in ref10) {
      card = ref10[name];
      card.sources = card.sources.sort();
    }
    ref11 = exportObj.modifications;
    for (name in ref11) {
      card = ref11[name];
      card.sources = card.sources.sort();
    }
    ref12 = exportObj.titles;
    for (name in ref12) {
      card = ref12[name];
      card.sources = card.sources.sort();
    }
    exportObj.expansions = {};
    exportObj.pilotsById = {};
    exportObj.pilotsByLocalizedName = {};
    ref13 = exportObj.pilots;
    for (pilot_name in ref13) {
      pilot = ref13[pilot_name];
      exportObj.fixIcons(pilot);
      exportObj.pilotsById[pilot.id] = pilot;
      exportObj.pilotsByLocalizedName[pilot.name] = pilot;
      ref14 = pilot.sources;
      for (t = 0, len9 = ref14.length; t < len9; t++) {
        source = ref14[t];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.pilotsById).length !== Object.keys(exportObj.pilots).length) {
      throw new Error("At least one pilot shares an ID with another");
    }
    exportObj.pilotsByFactionCanonicalName = {};
    ref15 = exportObj.pilots;
    for (pilot_name in ref15) {
      pilot = ref15[pilot_name];
      ((base = ((base1 = exportObj.pilotsByFactionCanonicalName)[name2 = pilot.faction] != null ? base1[name2] : base1[name2] = {}))[name1 = pilot.canonical_name] != null ? base[name1] : base[name1] = []).push(pilot);
      switch (pilot.faction) {
        case 'Resistance':
          ((base2 = ((base3 = exportObj.pilotsByFactionCanonicalName)['Rebel Alliance'] != null ? base3['Rebel Alliance'] : base3['Rebel Alliance'] = {}))[name3 = pilot.canonical_name] != null ? base2[name3] : base2[name3] = []).push(pilot);
          break;
        case 'First Order':
          ((base4 = ((base5 = exportObj.pilotsByFactionCanonicalName)['Galactic Empire'] != null ? base5['Galactic Empire'] : base5['Galactic Empire'] = {}))[name4 = pilot.canonical_name] != null ? base4[name4] : base4[name4] = []).push(pilot);
      }
    }
    exportObj.upgradesById = {};
    exportObj.upgradesByLocalizedName = {};
    ref16 = exportObj.upgrades;
    for (upgrade_name in ref16) {
      upgrade = ref16[upgrade_name];
      exportObj.fixIcons(upgrade);
      exportObj.upgradesById[upgrade.id] = upgrade;
      exportObj.upgradesByLocalizedName[upgrade.name] = upgrade;
      ref17 = upgrade.sources;
      for (u = 0, len10 = ref17.length; u < len10; u++) {
        source = ref17[u];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.upgradesById).length !== Object.keys(exportObj.upgrades).length) {
      throw new Error("At least one upgrade shares an ID with another");
    }
    exportObj.upgradesBySlotCanonicalName = {};
    ref18 = exportObj.upgrades;
    for (upgrade_name in ref18) {
      upgrade = ref18[upgrade_name];
      ((base6 = exportObj.upgradesBySlotCanonicalName)[name5 = upgrade.slot] != null ? base6[name5] : base6[name5] = {})[upgrade.canonical_name] = upgrade;
    }
    exportObj.modificationsById = {};
    exportObj.modificationsByLocalizedName = {};
    ref19 = exportObj.modifications;
    for (modification_name in ref19) {
      modification = ref19[modification_name];
      exportObj.fixIcons(modification);
      if (modification.huge != null) {
        if (modification.restriction_func == null) {
          modification.restriction_func = exportObj.hugeOnly;
        }
      } else if (modification.restriction_func == null) {
        modification.restriction_func = function(ship) {
          var ref20;
          return !((ref20 = ship.data.huge) != null ? ref20 : false);
        };
      }
      exportObj.modificationsById[modification.id] = modification;
      exportObj.modificationsByLocalizedName[modification.name] = modification;
      ref20 = modification.sources;
      for (v = 0, len11 = ref20.length; v < len11; v++) {
        source = ref20[v];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.modificationsById).length !== Object.keys(exportObj.modifications).length) {
      throw new Error("At least one modification shares an ID with another");
    }
    exportObj.modificationsByCanonicalName = {};
    ref21 = exportObj.modifications;
    for (modification_name in ref21) {
      modification = ref21[modification_name];
      (exportObj.modificationsByCanonicalName != null ? exportObj.modificationsByCanonicalName : exportObj.modificationsByCanonicalName = {})[modification.canonical_name] = modification;
    }
    exportObj.titlesById = {};
    exportObj.titlesByLocalizedName = {};
    ref22 = exportObj.titles;
    for (title_name in ref22) {
      title = ref22[title_name];
      exportObj.fixIcons(title);
      exportObj.titlesById[title.id] = title;
      exportObj.titlesByLocalizedName[title.name] = title;
      ref23 = title.sources;
      for (w = 0, len12 = ref23.length; w < len12; w++) {
        source = ref23[w];
        if (!(source in exportObj.expansions)) {
          exportObj.expansions[source] = 1;
        }
      }
    }
    if (Object.keys(exportObj.titlesById).length !== Object.keys(exportObj.titles).length) {
      throw new Error("At least one title shares an ID with another");
    }
    exportObj.titlesByShip = {};
    ref24 = exportObj.titles;
    for (title_name in ref24) {
      title = ref24[title_name];
      if (!(title.ship in exportObj.titlesByShip)) {
        exportObj.titlesByShip[title.ship] = [];
      }
      exportObj.titlesByShip[title.ship].push(title);
    }
    exportObj.titlesByCanonicalName = {};
    ref25 = exportObj.titles;
    for (title_name in ref25) {
      title = ref25[title_name];
      if (title.canonical_name === '"Heavy Scyk" Interceptor'.canonicalize()) {
        ((base7 = (exportObj.titlesByCanonicalName != null ? exportObj.titlesByCanonicalName : exportObj.titlesByCanonicalName = {}))[name6 = title.canonical_name] != null ? base7[name6] : base7[name6] = []).push(title);
      } else {
        (exportObj.titlesByCanonicalName != null ? exportObj.titlesByCanonicalName : exportObj.titlesByCanonicalName = {})[title.canonical_name] = title;
      }
    }
    return exportObj.expansions = Object.keys(exportObj.expansions).sort();
  };

  exportObj.fixIcons = function(data) {
    if (data.text != null) {
      return data.text = data.text.replace(/%ASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-astromech"></i>').replace(/%BANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>').replace(/%BANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankright"></i>').replace(/%BARRELROLL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>').replace(/%BOMB%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bomb"></i>').replace(/%BOOST%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-boost"></i>').replace(/%CANNON%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>').replace(/%CARGO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cargo"></i>').replace(/%CLOAK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cloak"></i>').replace(/%COORDINATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-coordinate"></i>').replace(/%CRIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crit"></i>').replace(/%CREW%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crew"></i>').replace(/%ELITE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-elite"></i>').replace(/%EVADE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-evade"></i>').replace(/%FOCUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-focus"></i>').replace(/%HARDPOINT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>').replace(/%HIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hit"></i>').replace(/%ILLICIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-illicit"></i>').replace(/%JAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-jam"></i>').replace(/%KTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%MISSILE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>').replace(/%RECOVER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-recover"></i>').replace(/%REINFORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reinforce"></i>').replace(/%SALVAGEDASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-salvagedastromech"></i>').replace(/%SLOOPLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopleft"></i>').replace(/%SLOOPRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopright"></i>').replace(/%STRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-straight"></i>').replace(/%STOP%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-stop"></i>').replace(/%SYSTEM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-system"></i>').replace(/%TARGETLOCK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-targetlock"></i>').replace(/%TEAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-team"></i>').replace(/%TECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tech"></i>').replace(/%TORPEDO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo"></i>').replace(/%TROLLLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollleft"></i>').replace(/%TROLLRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollright"></i>').replace(/%TURNLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>').replace(/%TURNRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnright"></i>').replace(/%TURRET%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turret"></i>').replace(/%UTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%HUGESHIPONLY%/g, '<span class="card-restriction">Huge ship only.</span>').replace(/%LARGESHIPONLY%/g, '<span class="card-restriction">Large ship only.</span>').replace(/%SMALLSHIPONLY%/g, '<span class="card-restriction">Small ship only.</span>').replace(/%REBELONLY%/g, '<span class="card-restriction">Rebel only.</span>').replace(/%IMPERIALONLY%/g, '<span class="card-restriction">Imperial only.</span>').replace(/%SCUMONLY%/g, '<span class="card-restriction">Scum only.</span>').replace(/%LIMITED%/g, '<span class="card-restriction">Limited.</span>').replace(/%LINEBREAK%/g, '<br /><br />').replace(/%DE_HUGESHIPONLY%/g, '<span class="card-restriction">Nur für Riesen Schiffe.</span>').replace(/%DE_LARGESHIPONLY%/g, '<span class="card-restriction">Nur für grosse Schiffe.</span>').replace(/%DE_REBELONLY%/g, '<span class="card-restriction">Nur für Rebellen.</span>').replace(/%DE_IMPERIALONLY%/g, '<span class="card-restriction">Nur für das Imperium.</span>').replace(/%DE_SCUMONLY%/g, '<span class="card-restriction">Nur für Abschaum & Kriminelle.</span>').replace(/%FR_HUGESHIPONLY%/g, '<span class="card-restriction">Vaisseau immense uniquement.</span>').replace(/%FR_LARGESHIPONLY%/g, '<span class="card-restriction">Grand vaisseau uniquement.</span>').replace(/%FR_REBELONLY%/g, '<span class="card-restriction">Rebelle uniquement.</span>').replace(/%FR_IMPERIALONLY%/g, '<span class="card-restriction">Impérial uniquement.</span>').replace(/%FR_SCUMONLY%/g, '<span class="card-restriction">Racailles uniquement.</span>').replace(/%GOZANTIONLY%/g, '<span class="card-restriction"><em>Gozanti</em>-class cruiser only.</span>');
    }
  };

  exportObj.canonicalizeShipNames = function(card_data) {
    var ref, results, ship_data, ship_name;
    ref = card_data.ships;
    results = [];
    for (ship_name in ref) {
      ship_data = ref[ship_name];
      ship_data.english_name = ship_name;
      results.push(ship_data.canonical_name != null ? ship_data.canonical_name : ship_data.canonical_name = ship_data.english_name.canonicalize());
    }
    return results;
  };

  exportObj.renameShip = function(english_name, new_name) {
    exportObj.ships[new_name] = exportObj.ships[english_name];
    exportObj.ships[new_name].name = new_name;
    return delete exportObj.ships[english_name];
  };

}).call(this);
