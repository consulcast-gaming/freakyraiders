import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

import * as pmcBotData from "./Data/pmcbot.json"

class freakyraiders implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        const tables: IDatabaseTables = databaseServer.getTables();

        const freakmode_raiders = tables.bots.types["pmcbot"];

        const bodyIDs = 
        [
            "5d28ae4986f7742926686187",
            "5d1f566d86f7744bcd13459a",
            "5fcf63da5c287f01f22bf245",
            "618109c96d7ca35d076b3363",
            "5e9da17386f774054b6f79a3",
            "660440d2c8949a435906e43a",
            "642d9bbf6c06444bf7033855",
            "5d1f565786f7743f8362bcd5"
        ]
          
        for(let body in bodyIDs)
        {
            freakmode_raiders.appearance.body[body] = 1
        }

        const feetIDs =
        [
            "5d28af7886f77429275dba25",
            "6033a430ed2e0509b15f9033",
            "65707a89f5a6f1412f0c5f7b",
            "5f5e40a06760b4138443b341"
        ]

        for(let feet in feetIDs)
        {
            freakmode_raiders.appearance.feet[feet] = 1
        }

        const headIDs =
        [
            "5cc084dd14c02e000b0550a3",
            "5cc2e4d014c02e000d0115f8",
            "5cde9ff17d6c8b0474535daa"
        ]

        for(let head in headIDs)
        {
            freakmode_raiders.appearance.head[head] = 1
        }

        const equipmentChances = 
        {
            "chances": 
            {
                "equipment": {
                  "ArmBand": 100,
                  "ArmorVest": 50,
                  "Backpack": 20,
                  "Earpiece": 95,
                  "Eyewear": 85,
                  "FaceCover": 95,
                  "FirstPrimaryWeapon": 100,
                  "Headwear": 100,
                  "Holster": 100,
                  "Pockets": 100,
                  "Scabbard": 0,
                  "SecondPrimaryWeapon": 0,
                  "SecuredContainer": 100,
                  "TacticalVest": 100
                },
                "equipmentMods": {
                    "back_plate": 100,
                    "front_plate": 100,
                    "left_side_plate": 50,
                    "mod_equipment": 6,
                    "mod_equipment_000": 100,
                    "mod_equipment_001": 0,
                    "mod_equipment_002": 100,
                    "mod_mount": 0,
                    "mod_nvg": 17,
                    "right_side_plate": 50
                },
                "weaponMods": {
                    "mod_charge": 50,
                    "mod_flashlight": 100,
                    "mod_foregrip": 50,
                    "mod_handguard": 100,
                    "mod_launcher": 0,
                    "mod_magazine": 100,
                    "mod_mount": 100,
                    "mod_mount_000": 100,
                    "mod_mount_001": 100,
                    "mod_mount_002": 100,
                    "mod_mount_003": 100,
                    "mod_mount_004": 100,
                    "mod_muzzle": 100,
                    "mod_muzzle_000": 84,
                    "mod_muzzle_001": 76,
                    "mod_pistol_grip": 0,
                    "mod_reciever": 100,
                    "mod_scope": 90,
                    "mod_scope_000": 100,
                    "mod_scope_001": 0,
                    "mod_scope_002": 0,
                    "mod_sight_front": 100,
                    "mod_sight_rear": 100,
                    "mod_stock": 100,
                    "mod_stock_000": 100,
                    "mod_stock_001": 100,
                    "mod_tactical": 70,
                    "mod_tactical_000": 99,
                    "mod_tactical_001": 96,
                    "mod_tactical_002": 97,
                    "mod_tactical_003": 99,
                    "mod_tactical_2": 100
                }
            }
        }
        
        const freakyEquipmentChances = equipmentChances.chances.equipment;
        const freakyEquipmentModChances = equipmentChances.chances.equipmentMods;
        const freakyWeaponModChances = equipmentChances.chances.weaponMods;

        const equipmentIDs = [
            "ArmBand",
            "ArmorVest",
            "Backpack",
            "Earpiece",
            "Eyewear",
            "FaceCover",
            "FirstPrimaryWeapon",
            "Headwear",
            "Holster",
            "Pockets",
            "Scabbard",
            "SecondPrimaryWeapon",
            "SecuredContainer",
            "TacticalVest"
        ];

        const equipmentModIDs = [
            "back_plate",
            "front_plate",
            "left_side_plate",
            "mod_equipment",
            "mod_equipment_000",
            "mod_equipment_001",
            "mod_equipment_002",
            "mod_mount",
            "mod_nvg",
            "right_side_plate"
        ];

        const weaponModIDs = [
            "mod_charge",
                "mod_flashlight",
                "mod_foregrip",
                "mod_handguard",
                "mod_launcher",
                "mod_magazine",
                "mod_mount",
                "mod_mount_000",
                "mod_mount_001",
                "mod_mount_002",
                "mod_mount_003",
                "mod_mount_004",
                "mod_muzzle",
                "mod_muzzle_000",
                "mod_muzzle_001",
                "mod_pistol_grip",
                "mod_reciever",
                "mod_scope",
                "mod_scope_000",
                "mod_scope_001",
                "mod_scope_002",
                "mod_sight_front",
                "mod_sight_rear",
                "mod_stock",
                "mod_stock_000",
                "mod_stock_001",
                "mod_tactical",
                "mod_tactical_000",
                "mod_tactical_001",
                "mod_tactical_002",
                "mod_tactical_003",
                "mod_tactical_2"
        ]

        for (let equipment of equipmentIDs) {
            freakmode_raiders.chances.equipment[equipment] = freakyEquipmentChances[equipment];
        }

        for (let equipmentMods of equipmentModIDs) {
            freakmode_raiders.chances.equipment[equipmentMods] = freakyEquipmentModChances[equipmentMods];
        }

        for (let weaponMods of weaponModIDs) {
            freakmode_raiders.chances.equipment[weaponMods] = freakyWeaponModChances[weaponMods];
        }

        const InventoryChances =
        {
            "inventory": {
                "Ammo": {
                    "Caliber1143x23ACP": {
                    "5e81f423763d9f754677bf2e": 1
                    },
                    "Caliber12g": {
                    "560d5e524bdc2d25448b4571": 143,
                    "5c0d591486f7744c505b416f": 512,
                    "5d6e6869a4b9361c140bcfde": 3,
                    "5d6e68a8a4b9360b6c0d54e2": 20,
                    "5d6e68c4a4b9361b93413f79": 9,
                    "5d6e6911a4b9361bd5780d52": 59
                    },
                    "Caliber46x30": {
                    "5ba2678ad4351e44f824b344": 1
                    },
                    "Caliber545x39": {
                    "56dfef82d2720bbd668b4567": 164,
                    "56dff026d2720bb8668b4567": 92,
                    "56dff061d2720bb5668b4567": 319,
                    "56dff2ced2720bb4668b4567": 74,
                    "56dff3afd2720bba668b4567": 1620,
                    "56dff4a2d2720bbd668b456a": 50,
                    "5c0d5e4486f77478390952fe": 62
                    },
                    "Caliber556x45NATO": {
                    "54527a984bdc2d4e668b4567": 425,
                    "54527ac44bdc2d36668b4567": 23,
                    "59e68f6f86f7746c9f75e846": 142,
                    "59e6906286f7746c9f75e847": 299,
                    "59e690b686f7746c9f75e848": 7,
                    "59e6920f86f77411d82aa167": 103,
                    "5c0d5ae286f7741e46554302": 271
                    },
                    "Caliber57x28": {
                    "5cc80f67e4a949035e43bbba": 4,
                    "5cc80f8fe4a949033b0224a2": 129,
                    "5cc86840d7f00c002412c56c": 22
                    },
                    "Caliber762x35": {
                    "5fbe3ffdf8b6a877a729ea82": 1
                    },
                    "Caliber762x39": {
                    "5656d7c34bdc2d9d198b4587": 559,
                    "59e0d99486f7744a32234762": 23,
                    "59e4cf5286f7741778269d8a": 232,
                    "64b7af434b75259c590fa893": 88,
                    "64b7af5a8532cf95ee0a0dbd": 370
                    },
                    "Caliber762x51": {
                    "58dd3ad986f77403051cba8f": 38,
                    "5a608bf24f39f98ffc77720e": 23,
                    "5e023e53d4353e3302577c4c": 480,
                    "5e023e88277cce2b522ff2b1": 37
                    },
                    "Caliber9x18PM": {
                    "573719df2459775a626ccbc2": 373,
                    "5737218f245977612125ba51": 394
                    },
                    "Caliber9x19PARA": {
                    "56d59d3ad2720bdb418b4577": 189,
                    "5a3c16fe86f77452b62de32a": 675,
                    "5c0d56a986f774449d5de529": 305,
                    "5c3df7d588a4501f290594e5": 233,
                    "5c925fa22e221601da359b7b": 13,
                    "5efb0e16aeb21837e749c7ff": 240,
                    "64b7bbb74b75259c590fa897": 3589
                    },
                    "Caliber9x39": {
                    "57a0dfb82459774d3078b56c": 102,
                    "57a0e5022459774d1673f889": 87,
                    "5c0d668f86f7747ccb7f13b2": 46,
                    "61962d879bb3d20b0946d385": 56,
                    "6576f96220d53a5b8f3e395e": 36
                    }
                },
                "equipment": {
                    "ArmBand": {
                        "619bdef8c9546643a67df6f6": 1,
                        "619bde7fc9546643a67df6f4": 1

                    },
                    "ArmorVest": {
                        "5648a7494bdc2d9d488b4583": 1,
                        "5b44cf1486f77431723e3d05": 2,
                        "5b44d0de86f774503d30cba8": 2,
                        "5c0e655586f774045612eeb2": 2,
                        "5fd4c474dd870108a754b241": 3,
                        "609e8540d5c319764c2bc2e9": 3,
                        "63737f448b28897f2802b874": 1,
                        "64abd93857958b4249003418": 1,
                        "64be79c487d1510151095552": 1
                    },
                    "Backpack": {
                        "5ca20d5986f774331e7c9602": 1,
                        "5e9dcf5986f7746c417435b3": 1,
                        "5f5e467b0bc58666c37e7821": 1,
                        "6034d103ca006d2dca39b3f0": 1,
                        "6034d2d697633951dc245ea6": 1,
                        "6038d614d10cbf667352dd44": 1,
                        "60a272cc93ef783291411d8e": 1,
                        "60a2828e8689911a226117f9": 1,
                        "639346cc1c8f182ad90c8972": 1,
                        "656f198fb27298d6fd005466": 1
                    },
                    "Earpiece": {
                        "5645bcc04bdc2d363b8b4572": 372,
                        "5aa2ba71e5b5b000137b758f": 381,
                        "5b432b965acfc47a8774094e": 358,
                        "5f60cd6cf2bcbb675b00dac6": 200,
                        "6033fa48ffd42c541047f728": 254,
                        "628e4e576d783146b124c64d": 38
                    },
                    "Eyewear": {
                        "557ff21e4bdc2d89578b4586": 750,
                        "59e770b986f7742cbd762754": 817,
                        "5b432be65acfc433000ed01f": 370,
                        "603409c80ca681766b6a0fb2": 298,
                        "62a61c988ec41a51b34758d5": 103
                    },
                    "FaceCover": {
                        "572b7fa524597762b747ce82": 1,
                        "59e7715586f7742ee5789605": 1,
                        "5ab8f4ff86f77431c60d91ba": 1,
                        "5b432f3d5acfc4704b4a1dfb": 1,
                        "60363c0c92ec1c31037959f5": 1
                    },
                    "FirstPrimaryWeapon": {
                        "5447a9cd4bdc2dbd208b4567": 1,
                        "54491c4f4bdc2db1078b4568": 1,
                        "574d967124597745970e7c94": 1,
                        "576165642459773c7a400233": 1,
                        "57c44b372459772d2b39b8ce": 1,
                        "57d14d2524597714373db789": 1,
                        "57dc2fa62459775949412633": 1,
                        "583990e32459771419544dd2": 1,
                        "58948c8e86f77409493f7266": 1,
                        "5926bb2186f7744b1c6c6e60": 1,
                        "5a7828548dc32e5a9c28b516": 1,
                        "5ac4cd105acfc40016339859": 1,
                        "5ac66d2e5acfc43b321d4b53": 1,
                        "5ac66d725acfc43b321d4b60": 1,
                        "5ac66d9b5acfc4001633997a": 1,
                        "5b0bbe4e5acfc40dc528a72d": 1,
                        "5bb2475ed4351e00853264e3": 1,
                        "5bd70322209c4d00d7167b8f": 1,
                        "5c488a752e221602b412af63": 1,
                        "5cc82d76e24e8d00134b4b83": 1,
                        "5d43021ca4b9362eab4b5e25": 1,
                        "5df8ce05b11454561e39243b": 1,
                        "5f2a9575926fd9352339381f": 1,
                        "5fbcc1d9016cce60e8341ab3": 1,
                        "5fc3f2d5900b1d5091531e57": 1,
                        "60339954d62c9b14ed777c06": 1,
                        "606587252535c57a13424cfd": 1,
                        "623063e994fc3f7b302a9696": 1,
                        "6259b864ebedf17603599e88": 1,
                        "63171672192e68c5460cebc5": 1,
                        "644674a13d52156624001fbc": 1,
                        "645e0c6b3b381ede770e1cc9": 1,
                        "6499849fc93611967b034949": 1
                    },
                    "Headwear": {
                        "5645bc214bdc2d363b8b4571": 1,
                        "5b40e1525acfc4771e1c6611": 1,
                        "5b40e2bc5acfc40016388216": 1,
                        "5b40e3f35acfc40016388218": 1,
                        "5b432d215acfc4771e1c6624": 1,
                        "5e4bfc1586f774264f7582d3": 1,
                        "5ea17ca01412a1425304d1c0": 1,
                        "5f60b34a41e30a4ab12a6947": 1,
                        "61bca7cda0eae612383adf57": 1,
                        "65709d2d21b9f815e208ff95": 1,
                        "65719f0775149d62ce0a670b": 1
                    },
                    "Holster": {
                        "56d59856d2720bd8418b456a": 1,
                        "5d3eb3b0a4b93615055e84d2": 1,
                        "5f36a0e5fbf956000b716b65": 1,
                        "602a9740da11d6478d5a06dc": 1,
                        "6193a720f8ee7e52e42109ed": 1,
                        "63088377b5cd696784087147": 1
                    },
                    "Pockets": {
                    "557ffd194bdc2d28148b457f": 1
                    },
                    "Scabbard": {},
                    "SecondPrimaryWeapon": {},
                    "SecuredContainer": {
                        "5c0a794586f77461c458f892": 1
                    },
                    "TacticalVest": {
                        "544a5caa4bdc2d1a388b4568": 4,
                        "5929a2a086f7744f4b234d43": 1,
                        "5e9db13186f7742f845ee9d3": 1,
                        "5f5f41f56760b4138443b352": 1,
                        "5fd4c60f875c30179f5d04c2": 1,
                        "60a3c68c37ea821725773ef5": 4,
                        "60a621c49c197e4e8c4455e6": 1,
                        "61bc85697113f767765c7fe7": 4,
                        "61bcc89aef0f505f0c6cd0fc": 4,
                        "628d0618d1ba6e4fa07ce5a4": 4,
                        "639343fce101f4caa40a4ef3": 4,
                        "64a536392d2c4e6e970f4121": 4,
                        "64a5366719bab53bd203bf33": 4
                    }
                }
            }
        }

        const freaky45ACPChances = InventoryChances.inventory.Ammo.Caliber1143x23ACP;
        const freaky12gChances = InventoryChances.inventory.Ammo.Caliber12g;
        const freaky46x30Chances = InventoryChances.inventory.Ammo.Caliber46x30;
        const freaky545Chances = InventoryChances.inventory.Ammo.Caliber545x39;
        const freaky556Chances = InventoryChances.inventory.Ammo.Caliber556x45NATO;
        const freaky57x28Chances = InventoryChances.inventory.Ammo.Caliber57x28;
        const freaky300blkChances = InventoryChances.inventory.Ammo.Caliber762x35;
        const freaky762x39Chances = InventoryChances.inventory.Ammo.Caliber762x39;
        const freaky762x51Chances = InventoryChances.inventory.Ammo.Caliber762x51;
        const freaky9x18Chances = InventoryChances.inventory.Ammo.Caliber9x18PM;
        const freaky9x19Chances = InventoryChances.inventory.Ammo.Caliber9x19PARA;
        const freaky9x39Chances = InventoryChances.inventory.Ammo.Caliber9x39;

        const freakyArmbandChances = InventoryChances.inventory.equipment.ArmBand;
        const freakyArmorVestChances = InventoryChances.inventory.equipment.ArmorVest;
        const freakyBackpackChances = InventoryChances.inventory.equipment.Backpack;
        const freakyEarpieceChances = InventoryChances.inventory.equipment.Earpiece;
        const freakyEyewearChances = InventoryChances.inventory.equipment.Eyewear;
        const freakyFaceCoverChances = InventoryChances.inventory.equipment.FaceCover;
        const freakyFirstPrimaryWeaponChances = InventoryChances.inventory.equipment.FirstPrimaryWeapon;
        const freakyHeadwearChances = InventoryChances.inventory.equipment.Headwear;
        const freakyHolsterChances = InventoryChances.inventory.equipment.Holster;
        const freakyPocketsChances = InventoryChances.inventory.equipment.Pockets;
        const freakySecuredContainerChances = InventoryChances.inventory.equipment.SecuredContainer;
        const freakyTacticalVestChances = InventoryChances.inventory.equipment.TacticalVest;

        const _45ACPIDs = 
        [
            "5e81f423763d9f754677bf2e"
        ]

        const _12gIDs =
        [
            "560d5e524bdc2d25448b4571",
            "5c0d591486f7744c505b416f",
            "5d6e6869a4b9361c140bcfde",
            "5d6e68a8a4b9360b6c0d54e2",
            "5d6e68c4a4b9361b93413f79",
            "5d6e6911a4b9361bd5780d52"
        ]
        
        const _46x30IDs =
        [
            "5ba2678ad4351e44f824b344"
        ]

        const _545IDs =
        [
            "56dfef82d2720bbd668b4567",
            "56dff026d2720bb8668b4567",
            "56dff061d2720bb5668b4567",
            "56dff2ced2720bb4668b4567",
            "56dff3afd2720bba668b4567",
            "56dff4a2d2720bbd668b456a",
            "5c0d5e4486f77478390952fe"        
        ]

        const _556IDs =
        [
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6920f86f77411d82aa167",
            "5c0d5ae286f7741e46554302"
        ]

        const _57x28IDs =
        [
            "5cc80f67e4a949035e43bbba",
            "5cc80f8fe4a949033b0224a2",
            "5cc86840d7f00c002412c56c"
        ]

        const _300blkIDs =
        [
            "5fbe3ffdf8b6a877a729ea82"
        ]

        const _762x39IDs =
        [
            "5656d7c34bdc2d9d198b4587",
            "59e0d99486f7744a32234762",
            "59e4cf5286f7741778269d8a",
            "64b7af434b75259c590fa893",
            "64b7af5a8532cf95ee0a0dbd"
        ]
        
        const _762x51IDs =
        [
            "58dd3ad986f77403051cba8f",
            "5a608bf24f39f98ffc77720e",
            "5e023e53d4353e3302577c4c",
            "5e023e88277cce2b522ff2b1"
        ]

        const _9x18IDs =
        [
            "573719df2459775a626ccbc2",
            "5737218f245977612125ba51"
        ]

        const _9x19PARAIDs =
        [
            "56d59d3ad2720bdb418b4577",
            "5a3c16fe86f77452b62de32a",
            "5c0d56a986f774449d5de529",
            "5c3df7d588a4501f290594e5",
            "5c925fa22e221601da359b7b",
            "5efb0e16aeb21837e749c7ff",
            "64b7bbb74b75259c590fa897"
        ]

        const _9x39IDs =
        [
            "57a0dfb82459774d3078b56c",
            "57a0e5022459774d1673f889",
            "5c0d668f86f7747ccb7f13b2",
            "61962d879bb3d20b0946d385",
            "6576f96220d53a5b8f3e395e"
        ]

        const ArmbandIDs = [
        "619bdef8c9546643a67df6f6",
        "619bde7fc9546643a67df6f4"]

        const ArmorVestIDs = [
        "5648a7494bdc2d9d488b4583",
        "5b44cf1486f77431723e3d05",
        "5b44d0de86f774503d30cba8",
        "5c0e655586f774045612eeb2",
        "5fd4c474dd870108a754b241",
        "609e8540d5c319764c2bc2e9",
        "63737f448b28897f2802b874",
        "64abd93857958b4249003418",
        "64be79c487d1510151095552"]

        const BackpackIDs = [
        "5ca20d5986f774331e7c9602",
        "5e9dcf5986f7746c417435b3",
        "5f5e467b0bc58666c37e7821",
        "6034d103ca006d2dca39b3f0",
        "6034d2d697633951dc245ea6",
        "6038d614d10cbf667352dd44",
        "60a272cc93ef783291411d8e",
        "60a2828e8689911a226117f9",
        "639346cc1c8f182ad90c8972",
        "656f198fb27298d6fd005466"]

        const EarpieceIDs = [
        "5645bcc04bdc2d363b8b4572",
        "5aa2ba71e5b5b000137b758f",
        "5b432b965acfc47a8774094e",
        "5f60cd6cf2bcbb675b00dac6",
        "6033fa48ffd42c541047f728",
        "628e4e576d783146b124c64d"]

        const EyewearIDs = [
        "557ff21e4bdc2d89578b4586",
        "59e770b986f7742cbd762754",
        "5b432be65acfc433000ed01f",
        "603409c80ca681766b6a0fb2",
        "62a61c988ec41a51b34758d5"]

        const FaceCoverIDs = [
        "572b7fa524597762b747ce82",
        "59e7715586f7742ee5789605",
        "5ab8f4ff86f77431c60d91ba",
        "5b432f3d5acfc4704b4a1dfb",
        "60363c0c92ec1c31037959f5"]

        const FirstPrimaryWeaponIDs = [
            "5447a9cd4bdc2dbd208b4567",
            "54491c4f4bdc2db1078b4568",
            "574d967124597745970e7c94",
            "576165642459773c7a400233",
            "57c44b372459772d2b39b8ce",
            "57d14d2524597714373db789",
            "57dc2fa62459775949412633",
            "583990e32459771419544dd2",
            "58948c8e86f77409493f7266",
            "5926bb2186f7744b1c6c6e60",
            "5a7828548dc32e5a9c28b516",
            "5ac4cd105acfc40016339859",
            "5ac66d2e5acfc43b321d4b53",
            "5ac66d725acfc43b321d4b60",
            "5ac66d9b5acfc4001633997a",
            "5b0bbe4e5acfc40dc528a72d",
            "5bb2475ed4351e00853264e3",
            "5bd70322209c4d00d7167b8f",
            "5c488a752e221602b412af63",
            "5cc82d76e24e8d00134b4b83",
            "5d43021ca4b9362eab4b5e25",
            "5df8ce05b11454561e39243b",
            "5f2a9575926fd9352339381f",
            "5fbcc1d9016cce60e8341ab3",
            "5fc3f2d5900b1d5091531e57",
            "60339954d62c9b14ed777c06",
            "606587252535c57a13424cfd",
            "623063e994fc3f7b302a9696",
            "6259b864ebedf17603599e88",
            "63171672192e68c5460cebc5",
            "644674a13d52156624001fbc",
            "645e0c6b3b381ede770e1cc9",
            "6499849fc93611967b034949"
        ]

        const HeadwearIDs = [
        "5645bc214bdc2d363b8b4571",
        "5b40e1525acfc4771e1c6611",
        "5b40e2bc5acfc40016388216",
        "5b40e3f35acfc40016388218",
        "5b432d215acfc4771e1c6624",
        "5e4bfc1586f774264f7582d3",
        "5ea17ca01412a1425304d1c0",
        "5f60b34a41e30a4ab12a6947",
        "61bca7cda0eae612383adf57",
        "65709d2d21b9f815e208ff95",
        "65719f0775149d62ce0a670b"]

        const HolsterIDs = [
        "56d59856d2720bd8418b456a",
        "5d3eb3b0a4b93615055e84d2",
        "5f36a0e5fbf956000b716b65",
        "602a9740da11d6478d5a06dc",
        "6193a720f8ee7e52e42109ed",
        "63088377b5cd696784087147"]

        const PocketsIDs = ["557ffd194bdc2d28148b457f"]

        const SecuredContainerIDs = [
            "5c0a794586f77461c458f892"
        ]

        const TacticalVestIDs = [
        "544a5caa4bdc2d1a388b4568",
        "5929a2a086f7744f4b234d43",
        "5e9db13186f7742f845ee9d3",
        "5f5f41f56760b4138443b352",
        "5fd4c60f875c30179f5d04c2",
        "60a3c68c37ea821725773ef5",
        "60a621c49c197e4e8c4455e6",
        "61bc85697113f767765c7fe7",
        "61bcc89aef0f505f0c6cd0fc",
        "628d0618d1ba6e4fa07ce5a4",
        "639343fce101f4caa40a4ef3",
        "64a536392d2c4e6e970f4121",
        "64a5366719bab53bd203bf33"]

        for (let Caliber1143x23ACP of _45ACPIDs) {
            freakmode_raiders.inventory.Ammo[Caliber1143x23ACP] = freaky45ACPChances[Caliber1143x23ACP];
        }
        for (let Caliber12g of _12gIDs) {
            freakmode_raiders.inventory.Ammo[Caliber12g] = freaky12gChances[Caliber12g];
        }
        for (let Caliber46x30 of _46x30IDs) {
            freakmode_raiders.inventory.Ammo[Caliber46x30] = freaky46x30Chances[Caliber46x30];
        }
        for (let Caliber545x39 of _545IDs) {
            freakmode_raiders.inventory.Ammo[Caliber545x39] = freaky545Chances[Caliber545x39];
        }
        for (let Caliber556x45NATO of _556IDs) {
            freakmode_raiders.inventory.Ammo[Caliber556x45NATO] = freaky556Chances[Caliber556x45NATO];
        }
        for (let Caliber57x28 of _57x28IDs) {
            freakmode_raiders.inventory.Ammo[Caliber57x28] = freaky57x28Chances[Caliber57x28];
        }
        for (let Caliber762x35 of _300blkIDs) {
            freakmode_raiders.inventory.Ammo[Caliber762x35] = freaky300blkChances[Caliber762x35];
        }
        for (let Caliber762x39 of _762x39IDs) {
            freakmode_raiders.inventory.Ammo[Caliber762x39] = freaky762x39Chances[Caliber762x39];
        }
        for (let Caliber762x51 of _762x51IDs) {
            freakmode_raiders.inventory.Ammo[Caliber762x51] = freaky762x51Chances[Caliber762x51];
        }
        for (let Caliber9x18PM of _9x18IDs) {
            freakmode_raiders.inventory.Ammo[Caliber9x18PM] = freaky9x18Chances[Caliber9x18PM];
        }
        for (let Caliber9x19PARA of _9x19PARAIDs) {
            freakmode_raiders.inventory.Ammo[Caliber9x19PARA] = freaky9x19Chances[Caliber9x19PARA];
        }
        for (let Caliber9x39 of _9x39IDs) {
            freakmode_raiders.inventory.Ammo[Caliber9x39] = freaky9x39Chances[Caliber9x39];
        }

        for (let ArmBand of ArmbandIDs) {
            freakmode_raiders.inventory.equipment[ArmBand] = freakyArmbandChances[ArmBand];
        }
        for (let ArmorVest of ArmorVestIDs) {
            freakmode_raiders.inventory.equipment[ArmorVest] = freakyArmorVestChances[ArmorVest];
        }
        for (let Backpack of BackpackIDs) {
            freakmode_raiders.inventory.equipment[Backpack] = freakyBackpackChances[Backpack];
        }
        for (let Earpiece of EarpieceIDs) {
            freakmode_raiders.inventory.equipment[Earpiece] = freakyEarpieceChances[Earpiece];
        }
        for (let Eyewear of EyewearIDs) {
            freakmode_raiders.inventory.equipment[Eyewear] = freakyEyewearChances[Eyewear];
        }
        for (let FaceCover of FaceCoverIDs) {
            freakmode_raiders.inventory.equipment[FaceCover] = freakyFaceCoverChances[FaceCover];
        }
        for (let FirstPrimaryWeapon of FirstPrimaryWeaponIDs) {
            freakmode_raiders.inventory.equipment[FirstPrimaryWeapon] = freakyFirstPrimaryWeaponChances[FirstPrimaryWeapon];
        }
        for (let Headwear of HeadwearIDs) {
            freakmode_raiders.inventory.equipment[Headwear] = freakyHeadwearChances[Headwear];
        }
        for (let Holster of HolsterIDs) {
            freakmode_raiders.inventory.equipment[Holster] = freakyHolsterChances[Holster];
        }
        for (let Pockets of PocketsIDs) {
            freakmode_raiders.inventory.equipment[Pockets] = freakyPocketsChances[Pockets];
        }
        for (let SecuredContainer of SecuredContainerIDs) {
            freakmode_raiders.inventory.equipment[SecuredContainer] = freakySecuredContainerChances[SecuredContainer];
        }
        for (let TacticalVest of TacticalVestIDs) {
            freakmode_raiders.inventory.equipment[TacticalVest] = freakyTacticalVestChances[TacticalVest];
        }
        
    }
}

export const mod = new freakyraiders();