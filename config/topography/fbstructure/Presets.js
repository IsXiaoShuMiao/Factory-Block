/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */



/*
 * Registers a preset.
 * This preset is meant to be an example of basic void dimensions as would be used in a skyblock.
 * The overworld has a simple tree spawn structure.
 * internal id, display name, image path, description
 */
registerPreset("void", "Void Worlds", "fbstructure/images/Basic_Tree", "Overworld/Nether/End as void dimensions with a starting structure")
/*
 * Registers the dimensions.
 * resource location, script path
 */
.registerDimension("overworld", "fbstructure/dimensions/overworld_void")
.registerDimension("the_nether", "fbstructure/dimensions/nether_void")
.registerDimension("the_end", "fbstructure/dimensions/end_void")
/*
 * Registers a Forge event handler of type "BiomeLoadingEvent".
 * This event is where any modifications to biomes must be done.
 */
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
	accept: function(event) {
		/*
		 * Clears all feature generators
		 */
		Util.Features.clearFeatures(event);
		/*
		 * Clears all structure generators
		 */
		Util.Features.clearStructures(event);
	}
}).class);