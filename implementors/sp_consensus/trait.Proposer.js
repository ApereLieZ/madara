(function() {var implementors = {
"mc_block_proposer":[["impl&lt;A, B, Block, C, PR&gt; Proposer&lt;Block&gt; for <a class=\"struct\" href=\"mc_block_proposer/struct.Proposer.html\" title=\"struct mc_block_proposer::Proposer\">Proposer</a>&lt;B, Block, C, A, PR&gt;<span class=\"where fmt-newline\">where\n    A: TransactionPool&lt;Block = Block&gt; + 'static,\n    B: Backend&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    Block: BlockT,\n    C: BlockBuilderProvider&lt;B, Block, C&gt; + HeaderBackend&lt;Block&gt; + ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    C::Api: ApiExt&lt;Block, StateBackend = StateBackendFor&lt;B, Block&gt;&gt; + BlockBuilderApi&lt;Block&gt;,\n    PR: ProofRecording,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()