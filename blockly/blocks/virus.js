goog.provide('Blockly.Blocks.virus');

goog.require('Blockly.Blocks');

Blockly.Blocks['virus_distance_trig'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
	      .appendField("Faire un TRIG sur la PIN")
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['virus_distance_echo'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
	      .appendField("Valeur du ECHO (en mm) sur la PIN")
	      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};